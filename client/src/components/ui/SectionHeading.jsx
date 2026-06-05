import Reveal from './Reveal';

export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      {label && (
        <Reveal>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {label}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="heading-lg mb-4">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-lg text-navy/60 dark:text-cream/60 leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
