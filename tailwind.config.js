/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'mirage': {
          '50': '#f4f6fb',
          '100': '#e8ecf6',
          '200': '#cbd8ec',
          '300': '#9db6dc',
          '400': '#6990c7',
          '500': '#4672b1',
          '600': '#345995',
          '700': '#2b4779',
          '800': '#273e65',
          '900': '#253555',
          '950': '#111827',
        },
      }
    },
  },
}

