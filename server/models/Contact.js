import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    service: String,
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ['contact', 'consultation', 'career'],
      default: 'contact',
    },
    role: String,
    resume: String,
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
