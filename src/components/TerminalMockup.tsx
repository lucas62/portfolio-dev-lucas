export default function TerminalMockup() {
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
