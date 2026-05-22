import FeatureCard from '../FeatureCard';
import { features } from '../../data/features';

export default function Features() {
  return (
    <section id="features" className="px-5 md:px-10 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="nx-mono text-[11px] text-[#00e5ff] tracking-widest mb-4">
            // 02 — CORE CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.02] mb-5">
            Built for those who<br />
            refuse to <span className="text-[#c3f5ff] nx-text-glow">wait</span>.
          </h2>
          <p className="text-base md:text-lg text-[#bac9cc] leading-relaxed">
            Every keystroke matters. Every millisecond compounds. Nexus rewrites the developer command line from first principles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3b494c]/30">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} num={i + 1} total={features.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
