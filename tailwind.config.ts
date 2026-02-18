import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0F14',
        baseAlt: '#0E1117',
        glowBlue: '#3B82F6',
        glowPurple: '#8B5CF6'
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.25)',
        glass: '0 16px 50px rgba(2,8,20,0.45), inset 0 1px 0 rgba(255,255,255,0.08)'
      },
      backgroundImage: {
        aurora: 'linear-gradient(135deg, #3B82F6, #8B5CF6)'
      }
    }
  },
  plugins: []
};

export default config;
