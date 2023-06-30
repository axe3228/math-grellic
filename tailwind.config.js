/** @type {import('tailwindcss').Config} */
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
    extend: {},
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
        100: '#4C5B92',
        200: '#1D284F',
      },
      'light-coral': {
        25: '#FFE9E9',
        50: '#F9CDCD',
        100: '#F79090',
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
      },
      gray: {
        DEFAULT: '#F0F2F3',
      }
    },
  },
  plugins: [],
};