import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { uploadDir } from './middleware/upload.js';
import mongoose from 'mongoose';
import { ensureDefaultAdmin } from './services/ensureDefaultAdmin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:4173',
].filter(Boolean);

app.use(morgan('dev'));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '2mb' }));

app.use('/uploads', express.static(uploadDir));

app.get('/api/health', (_, res) => {
  res.json({
    status: 'ok',
    brand: 'SparkHive',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    integrations: {
      mailchimp: Boolean(process.env.MAILCHIMP_API_KEY),
      calendly: Boolean(process.env.CALENDLY_URL),
    },
  });
});

app.get('/api/config/public', (_, res) => {
  res.json({
    calendlyUrl: process.env.CALENDLY_URL || '',
    whatsapp: process.env.WHATSAPP_NUMBER || '919810494571',
    gaId: process.env.GA_MEASUREMENT_ID || '',
    metaPixelId: process.env.META_PIXEL_ID || '',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

if (!process.env.JWT_SECRET) {
  console.warn('JWT_SECRET not set — admin auth will fail. Set it in server/.env');
}

await connectDB();
if (mongoose.connection.readyState === 1) {
  try {
    const result = await ensureDefaultAdmin();
    if (result?.created) {
      console.log(`Default admin created: ${result.email}`);
    }
  } catch (e) {
    console.warn('Default admin creation warning:', e.message);
  }
}

app.listen(PORT, () => {
  console.log(`SparkHive API running on port ${PORT}`);
});
