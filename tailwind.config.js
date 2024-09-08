/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                anonpro: ["Anonymous Pro", "sans-serif"]
            },
            fontSize: {
                "18px": "18px"
            }
        }
    },
    plugins: []
};
