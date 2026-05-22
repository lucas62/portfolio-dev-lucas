export default function CodeBlock() {
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
