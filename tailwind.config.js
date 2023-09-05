/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        'border-black' : '#2d3436',
        'hover-text-color' : '#e67e22',
        'clouds-color' : '#ecf0f1',
        'div-color' : '#313131'
      }
    },
  },
  plugins: [require("daisyui")],
}
