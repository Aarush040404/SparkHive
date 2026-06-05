import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Admin from '../models/Admin.js';

const run = async () => {
  const connected = await connectDB();
  if (!connected) {
    console.error('Cannot seed admin without MongoDB.');
    process.exit(1);
  }

  const email = process.env.ADMIN_EMAIL || 'admin@sparkhive.com';
  const password = process.env.ADMIN_PASSWORD || 'SparkHive@2025';
  const name = process.env.ADMIN_NAME || 'SparkHive Admin';

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log(`Admin already exists: ${email}`);
  } else {
    await Admin.create({ email, password, name, role: 'admin' });
    console.log(`Admin created: ${email}`);
    console.log('Change the password after first login in production.');
  }

  await mongoose.disconnect();
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
