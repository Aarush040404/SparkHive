const API_BASE = import.meta.env.VITE_API_URL || '/api';

function getToken() {
  return localStorage.getItem('sparkhive_token');
}

async function request(path, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
  };
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  }
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || data.errors?.[0]?.msg || 'Request failed');
  return data;
}

export const api = {
  getPublicConfig: () => request('/config/public'),

  getBlogs: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return request(`/blogs${q ? `?${q}` : ''}`);
  },
  getBlog: (slug) => request(`/blogs/${slug}`),
  getCaseStudies: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return request(`/case-studies${q ? `?${q}` : ''}`);
  },
  getCaseStudy: (slug) => request(`/case-studies/${slug}`),
  submitContact: (body) =>
    request('/contact', { method: 'POST', body: JSON.stringify(body) }),
  subscribeNewsletter: (email) =>
    request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),

  login: (email, password) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  getMe: () => request('/auth/me'),

  adminGetBlogs: () => request('/admin/blogs'),
  adminCreateBlog: (body) =>
    request('/admin/blogs', { method: 'POST', body: JSON.stringify(body) }),
  adminUpdateBlog: (id, body) =>
    request(`/admin/blogs/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  adminDeleteBlog: (id) =>
    request(`/admin/blogs/${id}`, { method: 'DELETE' }),

  adminGetCaseStudies: () => request('/admin/case-studies'),
  adminCreateCaseStudy: (body) =>
    request('/admin/case-studies', { method: 'POST', body: JSON.stringify(body) }),
  adminUpdateCaseStudy: (id, body) =>
    request(`/admin/case-studies/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  adminDeleteCaseStudy: (id) =>
    request(`/admin/case-studies/${id}`, { method: 'DELETE' }),

  adminGetContacts: () => request('/admin/contacts'),

  uploadImage: async (file) => {
    const form = new FormData();
    form.append('image', file);
    return request('/upload', { method: 'POST', body: form });
  },
};

export function setAuthToken(token) {
  if (token) localStorage.setItem('sparkhive_token', token);
  else localStorage.removeItem('sparkhive_token');
}
