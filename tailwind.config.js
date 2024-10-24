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
        secondary_2: "#DB4444",
        hover_button: "#E07575",
        button_1: "#0F6",
        button_2: "#DB4444",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(-4%)",
            // animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            // animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 3s infinite linear",
      },
    },
  },
  plugins: [],
};
