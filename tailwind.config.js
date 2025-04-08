
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          enlarge: {
            '50%': { transform: 'scale(1.2)' },
          },
        },
        animation: {
          enlarge5: 'enlarge 5s infinite',
          enlarge7: 'enlarge 7s infinite',
          enlarge10: 'enlarge 10s infinite',
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          noto: ['"Noto Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  