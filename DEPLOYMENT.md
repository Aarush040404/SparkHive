# SparkHive Deployment Guide

Deploy the MERN stack to **Render** (or Railway) with **MongoDB Atlas**.

## 1. MongoDB Atlas

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Database Access → add a database user with password.
3. Network Access → allow your IP for local dev, and add `0.0.0.0/0` only if needed for cloud deploys.
4. Connect → copy connection string:
   ```
   mongodb+srv://USER:PASSWORD@cluster.xxxxx.mongodb.net/sparkhive?retryWrites=true&w=majority&appName=SparkHive
   ```
5. Replace `USER` and `PASSWORD` with URL-encoded values if they contain special characters (`@`, `#`, `%`, etc).

## Atlas connection verification

After setting `MONGODB_URI` in `server/.env`, run:

```bash
cd server
npm run dev
```

Then check:

- API health: `GET http://localhost:5000/api/health`
- Expected: `"db": "connected"`

## 2. Seed data (local or one-time)

```bash
cd server
# Set MONGODB_URI in .env to Atlas URI
npm run seed
npm run seed:admin
```

Default admin (change in production):

- Email: `admin@sparkhive.com`
- Password: `SparkHive@2025`

## 3. Deploy on Render

1. Push repo to GitHub.
2. Render Dashboard → **New Blueprint** → connect repo → use `render.yaml`.
3. Set environment variables:

| Variable | Example |
|----------|---------|
| `MONGODB_URI` | Atlas connection string |
| `JWT_SECRET` | long random string |
| `CLIENT_URL` | `https://your-app.onrender.com` |
| `API_PUBLIC_URL` | `https://your-app.onrender.com` |
| `ADMIN_EMAIL` | your admin email |
| `ADMIN_PASSWORD` | strong password |
| `CALENDLY_URL` | `https://calendly.com/you/30min` |
| `MAILCHIMP_API_KEY` | optional |
| `MAILCHIMP_SERVER_PREFIX` | e.g. `us21` |
| `MAILCHIMP_AUDIENCE_ID` | optional |
| `GA_MEASUREMENT_ID` | optional |
| `META_PIXEL_ID` | optional |

4. Deploy. After first deploy, SSH/shell or run seed against Atlas from local machine with production `MONGODB_URI`.

## 4. Railway (alternative)

1. New Project → Deploy from GitHub.
2. Set root directory to repo root.
3. Build: `npm run install:all && npm run build`
4. Start: `cd server && npm start`
5. Add same env vars as above.

## 5. Admin CMS

- URL: `https://your-domain.com/admin/login`
- Create/edit/delete blog posts
- Upload images (stored in `server/uploads`, served at `/uploads/...`)
- View form submissions on dashboard
- CMS data persistence is backed by MongoDB Atlas (blogs, case studies, contacts, newsletter, admins)

## 6. Integrations checklist

- **Calendly**: set `CALENDLY_URL` → embed on Book Consultation page
- **Mailchimp**: set API key, server prefix, audience ID → newsletter syncs on signup
- **Google Analytics**: set `GA_MEASUREMENT_ID`
- **Meta Pixel**: set `META_PIXEL_ID`
- **WhatsApp**: `WHATSAPP_NUMBER=919810494571` (default in code)

## 7. Persistent uploads on Render

Render free tier has ephemeral disk. For production image uploads use:

- MongoDB GridFS, or
- Cloudinary / AWS S3 (recommended)

Until then, use image URLs (Unsplash, CDN) in the CMS or re-upload after redeploys.

## 8. Local production test

```bash
cd client && npm run build
cd ../server
NODE_ENV=production npm start
# Visit http://localhost:5000
```
