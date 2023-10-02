/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cit': "url('https://app.creativeitinstitute.com/img/balloon.jpg')",
      }, 
      fontFamily: {
        'nunito' : ['Nunito', 'sans-serif']
      }, 
      colors: {
        'primary': "#880a1f"
      }
    },
  },
  plugins: [],
}