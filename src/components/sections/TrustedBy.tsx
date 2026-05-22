import { TRUSTED_COMPANIES } from '../../data/companies';

export default function TrustedBy() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-10 md:py-14 border-y border-[#3b494c]/30 bg-[#0e0e0f]">
      <div className="max-w-[1400px] mx-auto">
        <div className="nx-mono text-[11px] text-[#849396] tracking-widest mb-8 text-center">
          // TRUSTED BY ENGINEERING TEAMS AT
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-5 text-[#bac9cc]/50">
          {TRUSTED_COMPANIES.map((logo) => (
            <div
              key={logo}
              className="nx-mono text-sm md:text-base font-semibold tracking-[0.15em] hover:text-[#c3f5ff] transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
