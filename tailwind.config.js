/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    './pages/**/*.{html,ts,js,vue}',
    './components/**/*.{html,ts,js,vue}'
  ],
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
