/**
 * Optional Mailchimp integration for newsletter signups.
 * Set MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX (e.g. us21), MAILCHIMP_AUDIENCE_ID
 */

export async function subscribeToMailchimp(email) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !server || !audienceId) {
    return { synced: false, reason: 'Mailchimp not configured' };
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
  const auth = Buffer.from(`anystring:${apiKey}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      tags: ['SparkHive Website'],
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (res.ok) return { synced: true };
  if (data.title === 'Member Exists') return { synced: true, existing: true };
  throw new Error(data.detail || data.title || 'Mailchimp sync failed');
}
