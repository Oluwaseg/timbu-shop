/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBF4F5",
        secondary: "#FDD5DB",
        "accent-100": "#D598A1",
        "accent-200": "#AA7981",
        "accent-300": "#805B61",
        "accent-400": "#553D40",
        "accent-500": "#332427",
        // ui ux color
        "primary-10": "#FFE8EC",
        "primary-20": "#FFE",
        "primary-30": "#fbf4f5",
      },
      boxShadow: {
        "pink-gradient": "0 3px 5px rgba(255, 182, 193, 0.5)",
        pink: "0 2px 3px rgba(255, 182, 193, 0.5)",
      },
    },
  },
  plugins: [],
};
