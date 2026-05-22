/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // === Nexus Electric — surfaces ===
        surface: {
          DEFAULT: '#131314',
          dim: '#131314',
          bright: '#3a393a',
          'container-lowest': '#0e0e0f',
          'container-low': '#1c1b1c',
          container: '#201f20',
          'container-high': '#2a2a2b',
          'container-highest': '#353436',
        },
        'on-surface': {
          DEFAULT: '#e5e2e3',
          variant: '#bac9cc',
        },
        outline: {
          DEFAULT: '#849396',
          variant: '#3b494c',
        },

        // === Primary — Electric Blue ===
        primary: {
          DEFAULT: '#c3f5ff',
          container: '#00e5ff',
          'on-container': '#00626e',
          fixed: '#9cf0ff',
          'fixed-dim': '#00daf3',
        },
        'on-primary': {
          DEFAULT: '#00363d',
          container: '#00626e',
        },

        // === Secondary — Deep Teal ===
        secondary: {
          DEFAULT: '#75d5e2',
          container: '#00818d',
        },
        'on-secondary': {
          DEFAULT: '#00363c',
          container: '#f6feff',
        },

        // === Tertiary ===
        tertiary: {
          DEFAULT: '#dbf1f4',
          container: '#bfd5d7',
        },

        // === Error ===
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Following the typography scale from the design system
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'code-md': ['14px', { lineHeight: '20px' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      borderRadius: {
        // Sharp by design — no rounding anywhere
        none: '0',
        DEFAULT: '0',
      },
      spacing: {
        base: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        gutter: '24px',
      },
      maxWidth: {
        content: '1440px',
      },
      animation: {
        'nx-blink': 'nx-blink 1.1s infinite',
        'nx-pulse': 'nx-pulse 2s ease-in-out infinite',
        'nx-fade': 'nx-fade 0.8s cubic-bezier(0.2, 0.7, 0.3, 1) backwards',
      },
      keyframes: {
        'nx-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'nx-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.75)' },
        },
        'nx-fade': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'nx-glow': '0 0 0 1px rgba(0, 229, 255, 0.15), 0 0 48px -8px rgba(0, 229, 255, 0.18)',
        'nx-glow-hover': '0 0 0 1px rgba(0, 229, 255, 0.45), 0 0 60px -4px rgba(0, 229, 255, 0.28)',
      },
    },
  },
  plugins: [],
};
