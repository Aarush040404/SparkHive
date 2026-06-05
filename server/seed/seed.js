import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';
import { staticBlogs } from '../data/staticBlogs.js';
import { staticCaseStudies } from '../data/staticCaseStudies.js';

const run = async () => {
  const connected = await connectDB();
  if (!connected) {
    console.error('Cannot seed without MongoDB connection.');
    process.exit(1);
  }
  await Blog.deleteMany({});
  await CaseStudy.deleteMany({});
  await Blog.insertMany(staticBlogs);
  await CaseStudy.insertMany(staticCaseStudies);
  console.log('Database seeded successfully.');
  await mongoose.disconnect();
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
