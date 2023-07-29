/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        search: "url('../assets/icons/search.svg')",
        battery: "url('../assets/icons/battery.svg')",
        lte: "url('../assets/icons/lte.svg')",
        signal: "url('../assets/icons/signal.svg')",
      }),
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray1: "#333333",
        gray2: "#4f4f4f",
        gray3: "#828282",
        gray4: "#bdbdbd",
        gray5: "#e0e0e0",
        gray6: "#f2f2f2",
        gray7: "#f9f9f9",
        primary: "#373F67",
        secondary: "#5A85EE",
        tertiary: "#719CF7",
      },
      fontFamily: {
        pretendard: ["pretendard"],
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        bold: 600,
      },
    },
  },
  plugins: [],
};
