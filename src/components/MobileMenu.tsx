import { type NavItem } from '../data/navigation';

interface MobileMenuProps {
  navItems: NavItem[];
  menuOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ navItems, menuOpen, onClose }: MobileMenuProps) {
  if (!menuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 top-[57px] bg-[#0e0e0f] z-40 p-6 flex flex-col">
      <nav className="space-y-0.5">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 text-[#bac9cc] hover:text-[#c3f5ff] hover:bg-[#1c1b1c] transition-colors"
          >
            <span className="nx-mono text-[10px] tracking-widest text-[#849396]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto pt-8 border-t border-[#3b494c]/30 space-y-3">
        <button className="w-full bg-[#00e5ff] text-[#00363d] py-3 nx-mono text-xs font-semibold tracking-widest">
          $ INSTALL NEXUS
        </button>
        <div className="flex items-center justify-between nx-mono text-[10px] text-[#849396] tracking-widest">
          <span>v2.4.0</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00e5ff] nx-pulse" />
            ALL SYSTEMS OK
          </span>
        </div>
      </div>
    </div>
  );
}
