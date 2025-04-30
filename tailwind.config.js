/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundPosition: {
        'top-100': 'top 100%',
        'left-100': 'left 100%',
      },
      textColor: {
        'color': '#1f436e'
      },
      animation: {
        'progress': 'progress 1s ease-in-out forwards',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [],
};
