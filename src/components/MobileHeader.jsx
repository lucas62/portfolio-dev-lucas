import { Menu, X } from 'lucide-react';

export default function MobileHeader({ menuOpen, onToggle }) {
  return (
    <header className="md:hidden flex items-center justify-between px-4 py-3.5 border-b border-[#3b494c]/30 bg-[#0e0e0f] sticky top-0 z-50">
      <a href="#" className="flex items-center gap-2">
        <div className="w-5 h-5 bg-[#00e5ff] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0e0e0f]" />
        </div>
        <span className="font-bold tracking-tight text-base">
          NEXUS<span className="text-[#00e5ff] nx-cursor">_</span>
        </span>
      </a>
      <button
        onClick={onToggle}
        aria-label="Toggle menu"
        className="text-[#bac9cc] hover:text-[#c3f5ff] transition-colors"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </header>
  );
}
