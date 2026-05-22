import { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Github,
  Twitter,
  Menu,
  X,
  Check,
  Cpu,
  Zap,
  Sparkles,
  Cloud,
  Lock,
  Terminal as TerminalIcon,
} from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('product');
  const [copied, setCopied] = useState(false);

  const navItems = [
    { id: 'product', label: 'Product' },
    { id: 'features', label: 'Features' },
    { id: 'docs', label: 'Docs' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'changelog', label: 'Changelog' },
  ];

  const copyInstall = () => {
    navigator.clipboard?.writeText('curl -sSf https://nexus.sh | sh');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#131314] text-[#e5e2e3] relative">
      {/* MOBILE TOP BAR */}
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-[#bac9cc] hover:text-[#c3f5ff] transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#0e0e0f] z-40 p-6 flex flex-col">
          <nav className="space-y-0.5">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
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
      )}

      {/* DESKTOP SIDEBAR */}
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
              onClick={() => setActiveSection(item.id)}
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
            v2.4.0 · BUILD 2026.05
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

      {/* MAIN */}
      <main className="md:ml-[260px]">
        {/* HERO */}
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

        {/* TRUSTED BY */}
        <section className="px-5 md:px-10 lg:px-16 py-10 md:py-14 border-y border-[#3b494c]/30 bg-[#0e0e0f]">
          <div className="max-w-[1400px] mx-auto">
            <div className="nx-mono text-[11px] text-[#849396] tracking-widest mb-8 text-center">
              // TRUSTED BY ENGINEERING TEAMS AT
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-5 text-[#bac9cc]/50">
              {['VERCEL', 'STRIPE', 'LINEAR', 'SUPABASE', 'GITHUB', 'CLOUDFLARE'].map((logo) => (
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

        {/* FEATURES */}
        <section id="features" className="px-5 md:px-10 lg:px-16 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl mb-12 md:mb-16">
              <div className="nx-mono text-[11px] text-[#00e5ff] tracking-widest mb-4">
                // 02 — CORE CAPABILITIES
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.02] mb-5">
                Built for those who<br />
                refuse to <span className="text-[#c3f5ff] nx-text-glow">wait</span>.
              </h2>
              <p className="text-base md:text-lg text-[#bac9cc] leading-relaxed">
                Every keystroke matters. Every millisecond compounds. Nexus rewrites the developer command line from first principles.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3b494c]/30">
              {features.map((f, i) => (
                <FeatureCard key={f.title} {...f} num={i + 1} total={features.length} />
              ))}
            </div>
          </div>
        </section>

        {/* CODE SHOWCASE */}
        <section className="px-5 md:px-10 lg:px-16 py-20 md:py-32 bg-[#0e0e0f] relative overflow-hidden border-y border-[#3b494c]/30">
          <div className="absolute inset-0 nx-grid opacity-30 pointer-events-none" />
          <div className="absolute -left-32 top-1/2 w-[400px] h-[400px] bg-[#00e5ff]/[0.04] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="nx-mono text-[11px] text-[#00e5ff] tracking-widest mb-4">
                // 03 — DEVELOPER EXPERIENCE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                Your config,<br />
                as <span className="text-[#c3f5ff] nx-text-glow">code</span>.
              </h2>
              <p className="text-base md:text-lg text-[#bac9cc] leading-relaxed mb-8">
                Define your environment once. Version-control everything. Sync across machines with a single command. No more dotfile chaos.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Type-safe TOML configuration',
                  'Encrypted secrets management with age',
                  'Reproducible across every machine',
                  'Hot-reload on file changes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#e5e2e3]">
                    <span className="mt-1 w-4 h-4 border border-[#00e5ff] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#00e5ff]" strokeWidth={3} />
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CodeBlock />
          </div>
        </section>

        {/* STATS */}
        <section className="px-5 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#3b494c]/30">
              {[
                { num: '8ms', label: 'KEYSTROKE LATENCY', sub: 'p99 measured' },
                { num: '120K+', label: 'ACTIVE DEVELOPERS', sub: 'and counting' },
                { num: '247', label: 'BUILT-IN COMMANDS', sub: 'extensible API' },
                { num: '100%', label: 'LOCAL-FIRST', sub: 'offline capable' },
              ].map((stat) => (
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

        {/* CTA */}
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
                <span className="text-[#849396]">$</span> curl -sSf https://nexus.sh | sh
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

        {/* FOOTER */}
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

              {[
                { title: 'PRODUCT', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
                { title: 'RESOURCES', links: ['Docs', 'API', 'Examples', 'Blog'] },
                { title: 'COMPANY', links: ['About', 'Careers', 'Contact', 'Press'] },
              ].map((col) => (
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
      </main>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function TerminalMockup() {
  return (
    <div className="bg-[#0e0e0f] border border-[#3b494c]/60 nx-glow relative overflow-hidden">
      <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent" />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#3b494c]/40 bg-[#1c1b1c]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ffb4ab]" />
          <span className="w-2.5 h-2.5 bg-[#bac9cc]/30" />
          <span className="w-2.5 h-2.5 bg-[#00e5ff]" />
        </div>
        <span className="nx-mono text-[10px] text-[#849396] tracking-widest">~/dev/nexus</span>
        <span className="nx-mono text-[10px] text-[#849396]">↓ 2.4.0</span>
      </div>

      <div className="p-5 nx-mono text-[12.5px] space-y-1.5 min-h-[400px] leading-relaxed">
        <div className="flex gap-2.5">
          <span className="text-[#00e5ff]">▸</span>
          <span className="text-[#bac9cc]">nexus init</span>
        </div>
        <div className="pl-5 text-[#849396]">
          ✓ workspace: <span className="text-[#c3f5ff]">react-native-app</span>
        </div>
        <div className="pl-5 text-[#849396]">✓ 247 commands · 18 plugins loaded</div>
        <div className="pl-5 text-[#849396]">
          ✓ ai co-pilot ready · <span className="text-[#75d5e2]">claude-sonnet-4-7</span>
        </div>

        <div className="flex gap-2.5 pt-3">
          <span className="text-[#00e5ff]">▸</span>
          <span className="text-[#bac9cc]">deploy staging</span>
        </div>
        <div className="pl-5 text-[#75d5e2] italic">
          ↳ ai: did you mean{' '}
          <span className="text-[#c3f5ff] not-italic">`deploy --env staging --notify slack`</span>?
        </div>
        <div className="pl-5 text-[#849396]">⟳ building · 12 packages · 2.3s</div>
        <div className="pl-5 text-[#849396]">⟳ uploading · 3.2 MB · 412ms</div>
        <div className="pl-5 text-[#00e5ff]">
          ✓ deployed → <span className="text-[#c3f5ff] underline">staging.app</span>
        </div>
        <div className="pl-5 text-[#849396]">✓ notified #deploys on slack</div>

        <div className="flex gap-2.5 pt-3">
          <span className="text-[#00e5ff]">▸</span>
          <span className="text-[#e5e2e3]">
            _<span className="nx-cursor text-[#00e5ff]">▊</span>
          </span>
        </div>
      </div>

      <div className="px-4 py-2 border-t border-[#3b494c]/40 bg-[#1c1b1c] flex items-center justify-between nx-mono text-[10px] text-[#849396] tracking-widest">
        <div className="flex items-center gap-4">
          <span>
            <span className="text-[#00e5ff]">●</span> CONNECTED
          </span>
          <span>BRANCH: main</span>
        </div>
        <span>8ms · UTF-8</span>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, code, num, total }) {
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

function CodeBlock() {
  return (
    <div className="bg-[#0e0e0f] border border-[#3b494c]/60 nx-glow">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#3b494c]/40 bg-[#1c1b1c]">
        <span className="nx-mono text-[10px] text-[#849396] tracking-widest">nexus.config.toml</span>
        <span className="nx-mono text-[10px] text-[#00e5ff] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#00e5ff] nx-pulse" />
          LIVE
        </span>
      </div>
      <div className="p-5 nx-mono text-[12.5px] leading-[1.75] overflow-x-auto">
        <div>
          <span className="text-[#849396]"># Nexus workspace config</span>
        </div>
        <div>
          <span className="text-[#75d5e2]">[workspace]</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">name</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"rn-financial-app"</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">runtime</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"node-22"</span>
        </div>
        <div className="h-3" />
        <div>
          <span className="text-[#75d5e2]">[ai]</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">provider</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"anthropic"</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">model</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"claude-sonnet-4-7"</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">autosuggest</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#75d5e2]">true</span>
        </div>
        <div className="h-3" />
        <div>
          <span className="text-[#75d5e2]">[secrets]</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">SENTRY_DSN</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"$encrypted:af2c..."</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">AWS_REGION</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"sa-east-1"</span>
        </div>
        <div className="h-3" />
        <div>
          <span className="text-[#75d5e2]">[[alias]]</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">name</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"ship"</span>
        </div>
        <div>
          <span className="text-[#bac9cc]">run</span> <span className="text-[#849396]">=</span>{' '}
          <span className="text-[#c3f5ff]">"test &amp;&amp; build &amp;&amp; deploy"</span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Native Rust Performance',
    desc: 'Sub-millisecond command parsing. Async-first I/O. Renders at 60fps on hardware from 2008.',
    code: 'nexus bench --runs 1000',
  },
  {
    icon: Sparkles,
    title: 'AI That Lives In Your Shell',
    desc: 'Inline suggestions, error recovery, and natural-language → bash translation. Powered by Claude.',
    code: 'nexus ask "find files >100MB"',
  },
  {
    icon: Cloud,
    title: 'Universal Workspace Sync',
    desc: 'End-to-end encrypted sync of aliases, env vars, and history across every machine you own.',
    code: 'nexus sync --pull',
  },
  {
    icon: Lock,
    title: 'Secrets, Properly',
    desc: 'Native age-encryption for credentials. Per-workspace keys. Zero leakage to shell history.',
    code: 'nexus secrets add API_KEY',
  },
  {
    icon: Cpu,
    title: 'Plugin Ecosystem',
    desc: 'Write plugins in TypeScript, Lua, or Rust. Hot-reloaded. Published to the public registry.',
    code: 'nexus plugin install @stripe',
  },
  {
    icon: TerminalIcon,
    title: 'Composable By Default',
    desc: 'Every command is a function. Every function pipes cleanly. Build workflows from primitives.',
    code: 'logs | nexus filter --err',
  },
];
