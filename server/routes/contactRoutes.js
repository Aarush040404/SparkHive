import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = express.Router();
const useDb = () => mongoose.connection.readyState === 1;

const validate = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

router.post('/', validate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      service: req.body.service,
      message: req.body.message,
      type: req.body.type || 'contact',
      role: req.body.role,
    };
    if (useDb()) {
      await Contact.create(data);
    } else {
      console.log('Contact submission (no DB):', data);
    }
    res.status(201).json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
