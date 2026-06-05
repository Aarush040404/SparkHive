import express from 'express';
import mongoose from 'mongoose';
import CaseStudy from '../models/CaseStudy.js';
import { staticCaseStudies } from '../data/staticCaseStudies.js';

const router = express.Router();
const useDb = () => mongoose.connection.readyState === 1;

router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    if (!useDb()) {
      let items = [...staticCaseStudies];
      if (category) items = items.filter((c) => c.category === category);
      return res.json(items);
    }
    const filter = category ? { category } : {};
    const studies = await CaseStudy.find(filter).sort({ createdAt: -1 });
    res.json(studies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    if (!useDb()) {
      const study = staticCaseStudies.find((c) => c.slug === req.params.slug);
      if (!study) return res.status(404).json({ message: 'Not found' });
      return res.json(study);
    }
    const study = await CaseStudy.findOne({ slug: req.params.slug });
    if (!study) return res.status(404).json({ message: 'Not found' });
    res.json(study);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
