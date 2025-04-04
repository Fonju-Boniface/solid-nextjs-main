/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        stroke: "#EEEEEE",
        strokedark: "#2D2F40",
        hoverdark: "#252A42",
        titlebg: "#ADFFF8",
        titlebg2: "#FFEAC2",
        titlebgdark: "#46495A",
        btndark: "#292E45",
        white: "#FFFFFF",
        black: "#181C31",
        blackho: "#2C3149",
        blacksection: "#1C2136",
        primary: "#006BFF",
        primaryho: "#0063EC",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",
      },
      fontSize: {
        metatitle: ["12px", "20px"],
        sectiontitle: ["14px", "22px"],
        regular: ["16px", "26px"],
        metatitle3: ["18px", "26px"],
        metatitle2: ["20px", "32px"],
        para2: ["22px", "35px"],
        itemtitle: ["26px", "32px"],
        itemtitle2: ["24px", "32px"],
        hero: ["44px", "58px"],
        sectiontitle3: ["44px", "55px"],
        sectiontitle2: ["40px", "52px"],
        sectiontitle4: ["34px", "48px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        32.5: "8.125rem",
        35: "8.75rem",
        37.5: "9.375rem",
        40: "10rem",
        42.5: "10.625rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        50: "12.5rem",
        55: "13.75rem",
        60: "15rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        90: "22.5rem",
      },
      maxWidth: {
        "c-1390": "86.875rem",
        "c-1315": "82.188rem",
        "c-1280": "80rem",
        "c-1235": "77.188rem",
        "c-1154": "72.125rem",
        "c-1016": "63.5rem",
      },
      zIndex: {
        99999: "99999",
        999: "999",
        1: "1",
      },
      opacity: {
        65: ".65",
      },
      transitionProperty: { width: "width" },
      boxShadow: {
        "solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
        "solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
        "solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
        "solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
        "solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
        "solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
        "solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
        "solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
        "solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
        "solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
        "solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
        "solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
        "solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
        'night-inset-bottom': ' inset 0px -40px 30px #1C2136', // Custom bottom inset shadow
        'inset-bottom': ' inset 0px -40px 30px #fefefe', // Custom bottom inset shadow
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite",
        line4: "line 12s linear infinite",
        line5: "line 15s linear infinite",
        line6: "line 18s linear infinite",
        line7: "line 21s linear infinite",
      },
    },
  },
  plugins: [],
};
