/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white": '#FFFFFF',
        "plum": '#963484',
        "true-blue": '#3066BE',
        "argentinian-blue": '#60AFFF',
        "chefchaouen-blue": '#488BDF',
      },
    },
  },
  plugins: [],
}
