import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    tags: [String],
    author: {
      name: { type: String, default: 'SparkHive Team' },
      role: { type: String, default: 'Marketing Strategists' },
      avatar: { type: String, default: '' },
    },
    image: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    readTime: { type: Number, default: 5 },
    publishedAt: { type: Date, default: Date.now },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Blog', blogSchema);
