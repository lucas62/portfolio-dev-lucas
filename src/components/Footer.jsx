import { Github, Twitter } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/footer';

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10 border-t border-[#3b494c]/30 bg-[#0e0e0f]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 md:mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#00e5ff] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#0e0e0f]" />
              </div>
              <span className="font-bold tracking-tight text-lg">
                NEXUS<span className="text-[#00e5ff]">_</span>
              </span>
            </div>
            <p className="text-sm text-[#bac9cc] max-w-xs leading-relaxed mb-5">
              The high-performance command line for developers who refuse to compromise.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="w-8 h-8 border border-[#3b494c] flex items-center justify-center text-[#849396] hover:text-[#c3f5ff] hover:border-[#00e5ff] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 border border-[#3b494c] flex items-center justify-center text-[#849396] hover:text-[#c3f5ff] hover:border-[#00e5ff] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="nx-mono text-[11px] text-[#849396] tracking-widest mb-4">
                // {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#bac9cc] hover:text-[#c3f5ff] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#3b494c]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="nx-mono text-[10px] md:text-[11px] text-[#849396] tracking-widest">
            © 2026 NEXUS LABS · MIT LICENSED · MADE IN BRAZIL
          </div>
          <div className="flex items-center gap-2 nx-mono text-[10px] md:text-[11px]">
            <span className="w-1.5 h-1.5 bg-[#00e5ff] nx-pulse" />
            <span className="text-[#849396] tracking-widest">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
