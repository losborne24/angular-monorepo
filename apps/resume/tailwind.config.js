const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cambria', 'serif'],
        mono: ['Menlo', 'monospace'],
        sans: ['Helvetica', 'sans-serif'],
      },
    },
  },
  // Safelist classes used dynamically in Angular templates.
  // Prevents Tailwind from purging these classes during build
  // since they are constructed dynamically (e.g., 'font-mono', 'font-sans').
  safelist: ['font-sans', 'font-serif', 'font-mono'],
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
};
