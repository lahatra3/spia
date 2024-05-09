/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'black-rgba': 'rgba(22, 22, 22, 0.24)',
          },
      },
        fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui', ...],
        // 'serif': ['ui-serif', 'Georgia', ...],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        // 'display': ['Oswald', ...],
        // 'body': ['"Open Sans"', ...],
            gotham: ['Gotham'],
        },
    },
    darkMode: 'class',
    plugins: [],
  }