/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        spec: "calc(100% - 2rem)",
        screen: "100vh",
        "300px": "300px",
      }),
    },
  },
  plugins: [],
};
