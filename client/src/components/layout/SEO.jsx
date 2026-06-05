import { Helmet } from 'react-helmet-async';

const SITE = 'https://sparkhive.com';

export default function SEO({
  title = 'SparkHive — Marketing That Creates Real Impact',
  description = "We help brands grow through strategic storytelling, social media marketing, branding, PR, and digital experiences. We don't just create campaigns — We create Impact.",
  path = '',
  image = '/og-image.jpg',
  type = 'website',
}) {
  const url = `${SITE}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SparkHive',
    url: SITE,
    logo: `${SITE}/favicon.svg`,
    slogan: "We don't just create campaigns — We create Impact.",
    description,
    telephone: '+91-9810494571',
    email: 'sparkhive14@gmail.com',
    founder: { '@type': 'Person', name: 'Harleen Gambhir' },
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
