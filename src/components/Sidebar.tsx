import { Github, Twitter } from 'lucide-react';
import { VERSION, BUILD } from '../data/footer';
import { type NavItem } from '../data/navigation';

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export default function Sidebar({ navItems, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[260px] flex-col bg-[#0e0e0f] border-r border-[#3b494c]/30 z-40">
      <div className="px-8 pt-9 pb-12">
        <a href="#" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#00e5ff] flex items-center justify-center">
            <div className="w-2 h-2 bg-[#0e0e0f]" />
          </div>
          <span className="font-bold tracking-tight text-lg">
            NEXUS<span className="text-[#00e5ff] nx-cursor">_</span>
          </span>
        </a>
      </div>

      <nav className="flex-1 px-4">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onSectionChange(item.id)}
            className={`group flex items-center gap-3 px-4 py-2.5 text-sm transition-all relative ${
              activeSection === item.id
                ? 'bg-[#1c1b1c] text-[#c3f5ff]'
                : 'text-[#bac9cc] hover:text-[#c3f5ff] hover:bg-[#1c1b1c]'
            }`}
          >
            {activeSection === item.id && (
              <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-[#00e5ff]" />
            )}
            <span
              className={`nx-mono text-[10px] tracking-widest transition-colors ${
                activeSection === item.id
                  ? 'text-[#00e5ff]'
                  : 'text-[#849396] group-hover:text-[#75d5e2]'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="px-8 pb-8 pt-8 border-t border-[#3b494c]/30 space-y-4">
        <div className="flex items-center gap-2 nx-mono text-[11px]">
          <span className="w-1.5 h-1.5 bg-[#00e5ff] nx-pulse" />
          <span className="text-[#849396] tracking-widest">ALL SYSTEMS OK</span>
        </div>
        <div className="nx-mono text-[10px] text-[#849396] tracking-widest">
          {VERSION} · {BUILD}
        </div>
        <div className="flex items-center gap-3 pt-1">
          <a href="#" aria-label="GitHub" className="text-[#849396] hover:text-[#c3f5ff] transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="text-[#849396] hover:text-[#c3f5ff] transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
