module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'phone': '320px',
      // => @media (min-width: 320px) { ... }
      'tablet': '880px',
      // => @media (min-width: 880px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-home' : "url('assets/hero-home.png')",
      },
      colors: {
        dark10: "#18191A",
        dark9: "#242424",
        dark8: "#242526",
        dark7: "#3A3B3C",
        dark6: "#C4C4C4",
        dark5: "#F2F1F1",
        light: "#FFFFFF",
        accent: "#FF2B2B",
      },
    },
  },
  plugins: [],
};
