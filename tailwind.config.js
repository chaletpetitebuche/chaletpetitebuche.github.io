/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          primary: "#3f6212", // Forest green
          secondary: "#854d0e", // Dark amber/brown
          accent: "#84cc16", // Lime green
        },
      },
      height: {
        "screen-90": "90vh",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cabin: {
          primary: "#3f6212", // forest green
          secondary: "#854d0e", // warm brown
          accent: "#d97706", // amber
          neutral: "#1c1917", // stone-900
          "base-100": "#f5f5f4", // stone-100
          "base-200": "#e7e5e4", // stone-200
          "base-300": "#d6d3d1", // stone-300
          info: "#38bdf8", // sky blue
          success: "#22c55e", // green
          warning: "#facc15", // yellow
          error: "#ef4444", // red
        },
        "cabin-dark": {
          primary: "#84cc16", // lighter green for better contrast on dark
          secondary: "#d97706", // amber
          accent: "#a3e635", // lime
          neutral: "#f5f5f4", // stone-100
          "base-100": "#1c1917", // stone-900 - dark background
          "base-200": "#292524", // stone-800
          "base-300": "#44403c", // stone-700
          info: "#38bdf8", // sky blue
          success: "#22c55e", // green
          warning: "#facc15", // yellow
          error: "#ef4444", // red
        },
      },
    ],
  },
};
