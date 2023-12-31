/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '428px',
        //...defaultTheme.screens,
        'ab-xl': '1440px'
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
        squada: ['var(--font-squada)']
      },
      boxShadow: {
        'side-nav': '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
        'button': '0px 4px 12px 0px rgba(247, 108, 108, 0.50)',
        'panel-shadow': '0px 4px 24px 0px rgba(55, 71, 133, 0.05)',
      },
    },
    colors: {
      ...colors,
      'uranian-blue': {
        25: '#EBF4F9',
        50: '#D8EAF4',
        100: '#BBD9E9',
        200: '#84B5D0',
      },
      'space-blue': {
        25: '#CDD1E0',
        50: '#9BA3C1',        
        75: '#4C5B92',
        100: '#374785',
        200: '#1D284F',
      },
      'light-coral': {
        25: '#FFE9E9',
        50: '#F9CDCD',
        100: '#F79090',
        150: '#F76C6C',
        200: '#E45B5B',
      },
      state: {
        success: '#36A74E',
        warning: '#DDA300',
        error: '#D92A2A',
      },
      // Text Emphasis Colors
      neutral: {
        'high': '#1E3449',
        'med': '#707F8E',
        'accent': '#A4AEB7',
        'light': '#CFD4D9',
      },
      // Background Colors
      light: {
        DEFAULT: '#FFFFFF',
      },
      dark: {
        DEFAULT: '#0F1F38',
        'secondary': '#1D284F',
      },
      gray: {
        DEFAULT: '#F0F2F3',
      },
      'light-card': {
        DEFAULT: '#FBFCFF',
      }     
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addBase, addUtilities }) => {
      addBase({
        h1: { fontWeight: '700', fontSize: '72px', lineHeight: 1, letterSpacing: 0 },
        h2: { fontWeight: '700', fontSize: '60px', lineHeight: '64px', letterSpacing: 0 },
        h3: { fontWeight: '700', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },
        h4: { fontWeight: '700', fontSize: '30px', lineHeight: '40px', letterSpacing: 0 },
        h5: { fontWeight: '700', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        h6: { fontWeight: '700', fontSize: '18px', lineHeight: '30px', letterSpacing: 0 },
      });
      addUtilities({
        '.h1-base': { fontWeight: '400', fontSize: '72px', lineHeight: '98px', letterSpacing: 0 },
        '.h1-md': { fontWeight: '500', fontSize: '72px', lineHeight: '98px', letterSpacing: 0 },
        '.h1-bold': { fontWeight: '700', fontSize: '72px', lineHeight: '98px', letterSpacing: 0 },

        '.h2-base': { fontWeight: '400', fontSize: '48px', lineHeight: '64px', letterSpacing: 0 },
        '.h2-md': { fontWeight: '500', fontSize: '48px', lineHeight: '64px', letterSpacing: 0 },
        '.h2-bold': { fontWeight: '700', fontSize: '48px', lineHeight: '64px', letterSpacing: 0 },
        '.h2-lg-bold': { fontWeight: '800', fontSize: '48px', lineHeight: '64px', letterSpacing: 0 },

        '.h3-base': { fontWeight: '400', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },
        '.h3-md': { fontWeight: '500', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },
        '.h3-bold': { fontWeight: '700', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },
        '.h3-bold-lg': { fontWeight: '800', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },

        '.h4-base': { fontWeight: '400', fontSize: '28px', lineHeight: '40px', letterSpacing: 0 },
        '.h4-md': { fontWeight: '500', fontSize: '28px', lineHeight: '40px', letterSpacing: 0 },
        '.h4-bold': { fontWeight: '700', fontSize: '28px', lineHeight: '40px', letterSpacing: 0 },
        '.h4-bold-lg': { fontWeight: '800', fontSize: '28px', lineHeight: '40px', letterSpacing: 0 },

        '.h5-base': { fontWeight: '400', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        '.h5-md': { fontWeight: '500', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        '.h5-lg': { fontWeight: '600', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        '.h5-bold': { fontWeight: '700', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },

        '.h6-base': { fontWeight: '400', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },
        '.h6-md': { fontWeight: '500', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },
        '.h6-bold': { fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },
        '.h6-bold-lg': { fontWeight: '800', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },

        '.subheading-xl-regular': { fontWeight: '400', fontSize: '20px', lineHeight: '28px', letterSpacing: 1.6 },
        '.subheading-xl-md': { fontWeight: '500', fontSize: '20px', lineHeight: '28px', letterSpacing: 0 },

        '.subheading-lg-regular': { fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.subheading-lg-md': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.subheading-lg-bold': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },

        '.subheading-sm-regular': { fontWeight: '400', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.subheading-sm-md': { fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },

        '.subheading-card': { fontWeight: '500', fontSize: '10px', lineHeight: '16px', letterSpacing: 0 },

        '.lead-regular': { fontWeight: '400', fontSize: '18px', lineHeight: '32px', letterSpacing: 0 },
        '.lead-md': { fontWeight: '500', fontSize: '14px', lineHeight: '24px', letterSpacing: 0 },

        '.body-md': { fontWeight: '400', fontSize: '18px', lineHeight: '32px', letterSpacing: 0 },
        '.body-sm': { fontWeight: '400', fontSize: '14px', lineHeight: '22px', letterSpacing: 0 },
        '.body-xs': { fontWeight: '400', fontSize: '12px', lineHeight: '22px', letterSpacing: 0 },

        '.label-lg-md': { fontWeight: '500', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },
        '.label-lg-bold': { fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },

        '.label-md-md': { fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },
        '.label-md-bold': { fontWeight: '800', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },

        '.label-sm-md': { fontWeight: '500', fontSize: '12px', lineHeight: '16px', letterSpacing: 0 },
        '.label-sm-bold': { fontWeight: '700', fontSize: '12px', lineHeight: '16px', letterSpacing: 0 },

        '.label-large': { fontWeight: '800', fontSize: '16px', lineHeight: '30px', letterSpacing: 0 },

        '.btn-text-lg': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.btn-text-md-bold': { fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.btn-text-md': { fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.btn-text-sm-bold': { fontWeight: '800', fontSize: '14px', lineHeight: '18px', letterSpacing: '2px' },
        '.btn-text-sm': { fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },
      });
    })
  ],
};