# SparkHive — MERN Stack Agency Website

Premium marketing agency website built with **MongoDB**, **Express**, **React**, and **Node.js**.

## Stack

| Layer    | Tech                                      |
| -------- | ----------------------------------------- |
| Frontend | React 18, Vite, React Router, Tailwind    |
| Motion   | Framer Motion, GSAP, Lenis smooth scroll  |
| Backend  | Express, Mongoose, Node.js                |
| Database | MongoDB                                   |

## Quick start

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

Copy `server/.env.example` to `server/.env` and set your MongoDB URI:

```
MONGODB_URI=mongodb://127.0.0.1:27017/sparkhive
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 3. Seed sample data (optional)

```bash
cd server && npm run seed
```

### 4. Run development

From the project root:

```bash
npm run dev
```

- **Frontend:** http://localhost:5173  
- **API:** http://localhost:5000  

## Production

```bash
cd client && npm run build
cd ../server && npm start
```

Serve the React build from Express (configured in `server/index.js`).

## Pages

Home · About · Services · Case Studies · Blog · Testimonials · Careers · Contact · Book Consultation · Privacy · Terms

## Admin CMS

1. Ensure MongoDB is running and seeded:
   ```bash
   cd server && npm run seed && npm run seed:admin
   ```
2. Open **http://localhost:5173/admin/login**
3. Default credentials (change in production):
   - Email: `admin@sparkhive.com`
   - Password: `SparkHive@2025`

Features: JWT auth, blog CRUD, image upload, lead inbox.

## Integrations

| Service | Env variable(s) |
|---------|-------------------|
| Calendly | `CALENDLY_URL` in `server/.env` |
| Mailchimp | `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX`, `MAILCHIMP_AUDIENCE_ID` |
| Google Analytics | `GA_MEASUREMENT_ID` |
| Meta Pixel | `META_PIXEL_ID` |

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Render + MongoDB Atlas setup.

## Contact

- Phone: 9810494571  
- Email: sparkhive14@gmail.com  
