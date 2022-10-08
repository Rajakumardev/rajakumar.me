/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,md,mdx,tsx}", "./components/**/*.{js,jsx,md,mdx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#002B5B",
        "secondary": "#2B4865",
        "light": "#256D85",
        "accent": "#8FE3CF",
      }
    },
  },
  plugins: [],
}
