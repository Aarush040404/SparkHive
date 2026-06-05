import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';
import { requireAuth } from '../middleware/auth.js';
import { slugify } from '../utils/slugify.js';

const router = express.Router();
router.use(requireAuth);

const requireDb = (res) => {
  if (mongoose.connection.readyState !== 1) {
    res.status(503).json({ message: 'MongoDB connection required for CMS' });
    return false;
  }
  return true;
};

// ——— Blogs ———
router.get('/blogs', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const blogs = await Blog.find().sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/blogs', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) data.slug = slugify(data.title);
    const blog = await Blog.create(data);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/blogs/:id', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const data = { ...req.body };
    if (data.title && !data.slug) data.slug = slugify(data.title);
    const blog = await Blog.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/blogs/:id', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ——— Case Studies ———
router.get('/case-studies', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const studies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(studies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/case-studies', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) data.slug = slugify(data.title);
    const study = await CaseStudy.create(data);
    res.status(201).json(study);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/case-studies/:id', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const data = { ...req.body };
    if (data.title && !data.slug) data.slug = slugify(data.title);
    const study = await CaseStudy.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!study) return res.status(404).json({ message: 'Case study not found' });
    res.json(study);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/case-studies/:id', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const study = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!study) return res.status(404).json({ message: 'Case study not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ——— Contacts (read-only for admin) ———
router.get('/contacts', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const Contact = (await import('../models/Contact.js')).default;
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
