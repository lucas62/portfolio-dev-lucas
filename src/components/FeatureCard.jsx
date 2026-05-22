import { Check } from 'lucide-react';

export default function FeatureCard({ icon: Icon, title, desc, code, num, total }) {
  return (
    <div className="bg-[#131314] p-7 md:p-9 group relative hover:bg-[#1c1b1c] transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="w-11 h-11 border border-[#3b494c] flex items-center justify-center group-hover:border-[#00e5ff] group-hover:bg-[#00e5ff]/5 transition-all">
          <Icon className="w-[18px] h-[18px] text-[#c3f5ff]" />
        </div>
        <span className="nx-mono text-[11px] text-[#849396] tracking-widest">
          {String(num).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-xl md:text-[22px] font-semibold tracking-tight mb-3 text-[#e5e2e3]">
        {title}
      </h3>
      <p className="text-[#bac9cc] leading-relaxed mb-6 text-[14.5px] flex-1">{desc}</p>

      {code && (
        <div className="nx-mono text-[11.5px] text-[#75d5e2] bg-[#0e0e0f] border border-[#3b494c]/40 p-3 overflow-x-auto whitespace-nowrap">
          <span className="text-[#849396]">$</span> {code}
        </div>
      )}
    </div>
  );
}
