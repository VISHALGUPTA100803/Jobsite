/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}
// gridTemplateColumns: {
//   '70/30': '70% 28%',
// }
// This creates a new grid column layout where:
// The first column takes 70% of the available space.
// The second column takes 28% of the available space.
// The missing 2% likely accounts for the default grid gap or other spacing.
