/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   // Example content paths...
  //   // './public/**/*.html',
  //   // './src/**/*.{js,jsx,ts,tsx,vue}',
  //   './src/**/*.{js,ts,jsx,tsx}'
  // ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
