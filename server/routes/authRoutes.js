import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import { requireAuth, signToken } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
  ],
  async (req, res) => {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database required for admin login' });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const admin = await Admin.findOne({ email: req.body.email });
      if (!admin || !(await admin.comparePassword(req.body.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = signToken(admin._id);
      res.json({
        token,
        admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.get('/me', requireAuth, (req, res) => {
  res.json({ admin: req.admin });
});

export default router;
