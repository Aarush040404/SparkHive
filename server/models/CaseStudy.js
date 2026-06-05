import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client: { type: String, required: true },
    category: {
      type: String,
      enum: ['Healthcare', 'Branding', 'PR', 'Social Media', 'Web Design', 'Podcasts'],
      required: true,
    },
    excerpt: { type: String, required: true },
    image: { type: String, default: '' },
    metrics: {
      before: String,
      after: String,
      growth: String,
      engagement: String,
    },
    challenge: { type: String, required: true },
    strategy: { type: String, required: true },
    execution: { type: String, required: true },
    results: { type: String, required: true },
    testimonial: {
      quote: String,
      author: String,
      role: String,
    },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('CaseStudy', caseStudySchema);
