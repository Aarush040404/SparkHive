import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Newsletter from '../models/Newsletter.js';
import { subscribeToMailchimp } from '../services/mailchimp.js';

const router = express.Router();
const useDb = () => mongoose.connection.readyState === 1;

router.post('/', [
  body('email').isEmail().withMessage('Valid email required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const email = req.body.email;

    if (useDb()) {
      const exists = await Newsletter.findOne({ email });
      if (!exists) await Newsletter.create({ email });
    } else {
      console.log('Newsletter signup:', email);
    }

    let mailchimp = { synced: false };
    try {
      mailchimp = await subscribeToMailchimp(email);
    } catch (mcErr) {
      console.warn('Mailchimp sync warning:', mcErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Welcome to the SparkHive insider list.',
      mailchimp: mailchimp.synced,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
