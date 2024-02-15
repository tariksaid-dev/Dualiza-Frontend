/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          'orange-lanze': 'var(--color-orange-lanze)',
          'orange-ieshlanz': 'var(--color-orange-ieshlanz)',
          'dark-blue': 'var(--color-dark-blue)',
        }
      }
    },
  },
  plugins: [],
}

