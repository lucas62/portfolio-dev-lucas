import { Zap, Sparkles, Cloud, Lock, Cpu, Terminal as TerminalIcon } from 'lucide-react';

export const features = [
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
