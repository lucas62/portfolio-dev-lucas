import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import TerminalMockup from '../TerminalMockup';

export default function Hero() {
  return (
    <section
      id="product"
      className="relative px-5 md:px-10 lg:px-16 pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden nx-noise"
    >
      <div className="absolute inset-0 nx-grid opacity-70 nx-mask-radial-tl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00e5ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto">
        <div className="nx-stagger">
          <div className="inline-flex items-center gap-2 nx-mono text-[11px] text-[#bac9cc] mb-7 px-3 py-1.5 border border-[#3b494c] bg-[#1c1b1c]">
            <span className="text-[#00e5ff]">●</span>
            <span className="tracking-widest">v2.4.0 · AI COMMAND SUGGESTIONS LIVE</span>
          </div>

          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.025em] leading-[0.95] mb-7">
            The terminal,<br />
            <span className="text-[#c3f5ff] nx-text-glow">reimagined</span>
            <br />
            for devs who <span className="italic font-normal text-[#bac9cc]">ship.</span>
          </h1>

          <p className="text-base md:text-lg text-[#bac9cc] max-w-xl mb-9 leading-relaxed">
            A high-performance, AI-augmented command line built in Rust. Local-first, brutally fast, beautifully precise.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="group flex items-center gap-3 bg-[#00e5ff] text-[#00363d] px-5 md:px-6 py-3.5 font-semibold nx-mono text-xs md:text-sm tracking-widest hover:bg-[#9cf0ff] transition-all nx-glow-h">
              $ INSTALL NEXUS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 border border-[#00e5ff] text-[#c3f5ff] px-5 md:px-6 py-3.5 font-medium text-xs md:text-sm hover:bg-[#c3f5ff]/5 transition-all">
              Read the docs
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 nx-mono text-[10px] md:text-[11px] text-[#849396] tracking-widest">
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-[#00e5ff]" />
              macOS · LINUX · WIN
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-[#00e5ff]" />
              OPEN SOURCE · MIT
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-[#00e5ff]" />
              FREE FOR DEVS
            </div>
          </div>
        </div>

        <div className="nx-fade" style={{ animationDelay: '0.4s' }}>
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}
