import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import { staticBlogs } from '../data/staticBlogs.js';

const router = express.Router();

const useDb = () => mongoose.connection.readyState === 1;

router.get('/', async (req, res) => {
  try {
    const { category, search, featured, trending, limit = 50 } = req.query;
    if (!useDb()) {
      let items = [...staticBlogs];
      if (category) items = items.filter((b) => b.category === category);
      if (search) {
        const q = search.toLowerCase();
        items = items.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.excerpt.toLowerCase().includes(q)
        );
      }
      if (featured === 'true') items = items.filter((b) => b.featured);
      if (trending === 'true') items = items.filter((b) => b.trending);
      return res.json(items.slice(0, Number(limit)));
    }
    const filter = {};
    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;
    if (trending === 'true') filter.trending = true;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
      ];
    }
    const blogs = await Blog.find(filter)
      .sort({ publishedAt: -1 })
      .limit(Number(limit));
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    if (!useDb()) {
      const blog = staticBlogs.find((b) => b.slug === req.params.slug);
      if (!blog) return res.status(404).json({ message: 'Not found' });
      const related = staticBlogs
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);
      return res.json({ ...blog, related });
    }
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Not found' });
    const related = await Blog.find({
      category: blog.category,
      _id: { $ne: blog._id },
    }).limit(3);
    res.json({ ...blog.toObject(), related });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
