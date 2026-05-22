import { Check } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const CONFIG_FEATURES = [
  'Type-safe TOML configuration',
  'Encrypted secrets management with age',
  'Reproducible across every machine',
  'Hot-reload on file changes',
];

export default function CodeShowcase() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-20 md:py-32 bg-[#0e0e0f] relative overflow-hidden border-y border-[#3b494c]/30">
      <div className="absolute inset-0 nx-grid opacity-30 pointer-events-none" />
      <div className="absolute -left-32 top-1/2 w-[400px] h-[400px] bg-[#00e5ff]/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="nx-mono text-[11px] text-[#00e5ff] tracking-widest mb-4">
            // 03 — DEVELOPER EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] mb-5">
            Your config,<br />
            as <span className="text-[#c3f5ff] nx-text-glow">code</span>.
          </h2>
          <p className="text-base md:text-lg text-[#bac9cc] leading-relaxed mb-8">
            Define your environment once. Version-control everything. Sync across machines with a single command. No more dotfile chaos.
          </p>
          <ul className="space-y-3.5">
            {CONFIG_FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#e5e2e3]">
                <span className="mt-1 w-4 h-4 border border-[#00e5ff] flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00e5ff]" strokeWidth={3} />
                </span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <CodeBlock />
      </div>
    </section>
  );
}
