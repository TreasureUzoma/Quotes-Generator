// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        anonpro: ['Anonymous Pro', 'sans-serif'], 
      },
      fontSize: {
        '18px': '18px', 
      },
    },
  },
  plugins: [],
};
