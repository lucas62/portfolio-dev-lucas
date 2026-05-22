import { STATS } from '../../data/stats';

export default function Stats() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#3b494c]/30">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#131314] p-7 md:p-10 hover:bg-[#1c1b1c] transition-colors group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.025em] text-[#c3f5ff] nx-text-glow mb-3 group-hover:text-[#00e5ff] transition-colors">
                {stat.num}
              </div>
              <div className="nx-mono text-[10px] md:text-[11px] tracking-widest text-[#bac9cc] mb-1">
                {stat.label}
              </div>
              <div className="nx-mono text-[10px] tracking-widest text-[#849396]">/ {stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
