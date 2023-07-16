/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      "dark-bg" : "#253237",
      "gray-light" : "#9db4c0",
    },
    extend: {
    },
  },
  plugins: [],
}
