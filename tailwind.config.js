/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bluelight: '#98C5E9',
        neonpink: '#FF6EC7',
        abuabu:'#3a3a3a',
        abusedang:'#484848'
      }
    },
  },
  plugins: [],
}

