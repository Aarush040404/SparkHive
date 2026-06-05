import SEO from '../components/layout/SEO';
import Reveal from '../components/ui/Reveal';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service | SparkHive" path="/terms" />
      <section className="pt-32 section-padding max-w-3xl mx-auto">
        <Reveal>
          <h1 className="heading-lg mb-8">Terms of Service</h1>
          <div className="space-y-6 text-navy/70 dark:text-cream/70">
            <p>Last updated: May 2025</p>
            <p>By accessing sparkhive.com and our services, you agree to these Terms of Service.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Services</h2>
            <p>SparkHive provides marketing, branding, PR, digital, and related creative services as described in individual client agreements.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Intellectual Property</h2>
            <p>Website content, logos, and creative assets are owned by SparkHive unless otherwise agreed in writing with clients.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Limitation of Liability</h2>
            <p>SparkHive is not liable for indirect or consequential damages arising from use of our website or services, to the extent permitted by law.</p>
            <h2 className="font-display font-bold text-xl text-navy dark:text-cream">Contact</h2>
            <p>Questions: <a href="mailto:sparkhive14@gmail.com" className="text-primary">sparkhive14@gmail.com</a> · 9810494571</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
