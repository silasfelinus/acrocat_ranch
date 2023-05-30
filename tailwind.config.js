/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [],
  theme: {
    extend: {}
  },
  plugins: ['daisyui'],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
    logs: true
  }
}
