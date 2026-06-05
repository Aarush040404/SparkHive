import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const bento = [
  { title: '23+ Years Experience', desc: 'Decades of strategic marketing mastery.', size: 'lg', accent: true },
  { title: 'Strategic Creativity', desc: 'Ideas backed by data and business outcomes.', size: 'sm' },
  { title: 'Industry Expertise', desc: 'Healthcare, luxury, tech, and consumer.', size: 'sm' },
  { title: 'Personalized Campaigns', desc: 'No templates—every strategy is bespoke.', size: 'md' },
  { title: 'Measurable Results', desc: 'Transparent KPIs and ROI reporting.', size: 'md' },
  { title: 'Modern Execution', desc: 'Premium design, motion, and technology.', size: 'sm' },
  { title: 'Healthcare Specialization', desc: 'Compliant, trust-first patient marketing.', size: 'sm' },
  { title: 'Strong Media Network', desc: 'PR relationships that earn real coverage.', size: 'lg' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted-green/30 dark:bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Why SparkHive"
          title="Built for Brands That Demand Excellence"
          subtitle="A premium bento of capabilities that serious companies trust."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
          {bento.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className={`${
                item.size === 'lg' ? 'col-span-2 row-span-2' : item.size === 'md' ? 'col-span-2' : ''
              }`}
            >
              <div
                className={`h-full card-premium flex flex-col justify-end ${
                  item.accent ? 'bg-gradient-to-br from-primary to-primary-dark text-white' : ''
                }`}
              >
                <h3 className={`font-display font-bold text-lg md:text-xl mb-2 ${item.accent ? 'text-white' : ''}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${item.accent ? 'text-white/80' : 'text-navy/60 dark:text-cream/60'}`}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
