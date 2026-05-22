import { ArrowRight, Github } from 'lucide-react';
import { INSTALL_COMMAND } from '../../data/footer';

interface CTAProps {
  copied: boolean;
  copyInstall: () => void;
}

export default function CTA({ copied, copyInstall }: CTAProps) {
  return (
    <section id="pricing" className="px-5 md:px-10 lg:px-16 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 nx-grid opacity-60 nx-mask-radial pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="nx-mono text-[11px] text-[#00e5ff] tracking-widest mb-5">
          // READY TO COMPILE?
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1] mb-6">
          Upgrade your<br />
          <span className="text-[#c3f5ff] nx-text-glow">command line</span>.
        </h2>
        <p className="text-base md:text-lg text-[#bac9cc] mb-10 max-w-lg mx-auto leading-relaxed">
          One line. Zero config. Works on every Unix system you'll ever ssh into.
        </p>

        <div className="bg-[#0e0e0f] border border-[#3b494c]/60 p-1 mb-7 max-w-xl mx-auto nx-glow flex items-center">
          <code className="nx-mono text-xs md:text-sm text-[#c3f5ff] px-4 py-3 flex-1 text-left overflow-x-auto whitespace-nowrap">
            <span className="text-[#849396]">$</span> {INSTALL_COMMAND}
          </code>
          <button
            onClick={copyInstall}
            className="nx-mono text-[10px] tracking-widest text-[#849396] hover:text-[#00e5ff] transition-colors px-4 py-3 border-l border-[#3b494c]/60 whitespace-nowrap"
          >
            {copied ? '✓ COPIED' : 'COPY'}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="group flex items-center gap-3 bg-[#00e5ff] text-[#00363d] px-5 md:px-6 py-3.5 font-semibold nx-mono text-xs md:text-sm tracking-widest hover:bg-[#9cf0ff] transition-all">
            GET STARTED
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 border border-[#3b494c] text-[#bac9cc] px-5 md:px-6 py-3.5 font-medium text-xs md:text-sm hover:border-[#00e5ff] hover:text-[#c3f5ff] transition-all">
            <Github className="w-4 h-4" />
            Star on GitHub
            <span className="nx-mono text-[10px] text-[#849396]">12.4k</span>
          </button>
        </div>
      </div>
    </section>
  );
}
