/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-purple': '#4517FE',
      },
      fontFamily: {
        ClashBold: ['ClashBold', 'sans-serif'],
        ClashSemiBold: ['ClashSemiBold', 'sans-serif'],
        ClashMedium: ['ClashMedium', 'sans-serif'],
        ClashRegular: ['ClashRegular', 'sans-serif'],
        InterBold: ['InterBold', 'sans-serif'],
        InterRegular: ['InterRegular', 'sans-serif'],
        InterSemiBold: ['InterSemiBold', 'sans-serif'],
        InterMedium: ['InterMedium', 'sans-serif'],
        InterLight: ['InterLight', 'sans-serif'],
        InterThin: ['InterThin', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
    plugins: [],
  },
}
