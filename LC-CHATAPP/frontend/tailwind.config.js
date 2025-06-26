/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,tsx}"],
  theme: {
      extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      boxShadow: {
        'red-md': '0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06)',
        'blue-lg': '0 10px 15px -3px rgba(0, 0, 255, 0.1), 0 4px 6px -2px rgba(0, 0, 255, 0.05)',
        'pink-md': '0 4px 6px -1px rgba(255, 192, 203, 0.5), 0 2px 4px -1px rgba(255, 192, 203, 0.25)',
      },
    },
  }
};
