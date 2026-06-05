import SEO from '../components/layout/SEO';
import Reveal from '../components/ui/Reveal';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | SparkHive" path="/privacy" />
      <section className="pt-32 section-padding max-w-3xl mx-auto">
        <Reveal>
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          <div className="prose dark:prose-invert space-y-6 text-navy/70 dark:text-cream/70">
            <p>Last updated: May 2025</p>
            <p>SparkHive (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy explains how we collect, use, and protect information when you visit our website or use our services.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Information We Collect</h2>
            <p>We may collect name, email, phone, company details, and messages submitted through contact forms, consultation requests, career applications, and newsletter signups.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">How We Use Information</h2>
            <p>We use your information to respond to inquiries, deliver services, improve our website, and send marketing communications with your consent.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your data. No method of transmission over the internet is 100% secure.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Contact</h2>
            <p>For privacy inquiries: <a href="mailto:sparkhive14@gmail.com" className="text-primary">sparkhive14@gmail.com</a></p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
