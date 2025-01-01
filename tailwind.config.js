/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        // #008080 teal color
        primary:'#008000'
      }
    },
  },
  plugins: [],
}

