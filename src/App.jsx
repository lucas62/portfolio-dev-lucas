import { useState } from 'react';
import { navItems } from './data/navigation';
import { useCopyInstall } from './hooks/useCopyInstall';

import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Features from './components/sections/Features';
import CodeShowcase from './components/sections/CodeShowcase';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('product');
  const { copied, copyInstall } = useCopyInstall();

  return (
    <div className="min-h-screen bg-[#131314] text-[#e5e2e3] relative">
      <MobileHeader menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
      <MobileMenu navItems={navItems} menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Sidebar navItems={navItems} activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="md:ml-[260px]">
        <Hero />
        <TrustedBy />
        <Features />
        <CodeShowcase />
        <Stats />
        <CTA copied={copied} copyInstall={copyInstall} />
        <Footer />
      </main>
    </div>
  );
}
