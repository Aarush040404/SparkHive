import Admin from '../models/Admin.js';

export async function ensureDefaultAdmin() {
  const email = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || '';
  const name = process.env.ADMIN_NAME || 'SparkHive Admin';

  if (!email || !password) {
    return { ensured: false, reason: 'ADMIN_EMAIL/ADMIN_PASSWORD not set' };
  }

  const existing = await Admin.findOne({ email });
  if (existing) {
    return { ensured: true, existed: true, email };
  }

  await Admin.create({ email, password, name, role: 'admin' });
  return { ensured: true, created: true, email };
}

