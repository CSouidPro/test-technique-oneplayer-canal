// tailwind.config.js
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.tsx']
export const theme = {
  extend: {
    maxWidth: {
      50: '50%',
      60: '60%',
      70: '70%',
      80: '80%',
      90: '90%',
      // 100% is not required as max-w-full will be present by default
    },
    width: {
      50: '50%',
      60: '60%',
      70: '70%',
      80: '80%',
      90: '90%',
      // 100% is not required as max-w-full will be present by default
    },
  },
}
