/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      colors: {
        text: "#FAFAFA",
        secondary: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
