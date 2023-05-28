/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
       rate: '400px',
       header: '560px',
      },
      fontSize: {
        h1: '2.5rem',
      },
      screens: {
         xs: '470px',
      },
      colors: {
        main: '#080A1A',
        subMain: '#61cbde',
        dry: '#0B0F29',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#617083',
        dryGray: '#E0D5D5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}