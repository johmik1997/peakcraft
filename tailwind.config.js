
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: theme => ({
          'hero-lg': "url('../assets/Footerbg.png')",
          'hero-sm': "url('my-project//src//assets//Footerbg-small.png')"
        })
      }
    },
  colors:{
    accentNavy: '#1a3a5e', // Example Navy color, adjust as needed
  accentOrange: '#f97316', // Example Orange color, adjust as needed
  accentTeal: '#14b8a6',
},

  safelist: ["h-[60px]", "md:h-12"], // Ensure Tailwind keeps these classes
  plugins: [],
};
