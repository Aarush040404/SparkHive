import { Link, useParams } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import Reveal from '../components/ui/Reveal';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 section-padding text-center">
        <h1 className="heading-lg">Service not found</h1>
        <Link to="/services" className="btn-primary mt-6 inline-flex">All Services</Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${service.title} | SparkHive`} path={`/services/${slug}`} />
      <section className="pt-32 section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Link to="/services" className="text-primary text-sm font-medium mb-6 inline-block">← All Services</Link>
            <h1 className="heading-lg mb-6">{service.title}</h1>
            <p className="text-xl text-navy/70 dark:text-cream/70 leading-relaxed mb-8">{service.description}</p>
            <p className="text-navy/60 dark:text-cream/60 leading-relaxed mb-10">{service.details}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-consultation" className="btn-primary">Book Consultation</Link>
              <Link to="/case-studies" className="btn-outline">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
