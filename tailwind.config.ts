import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    'ui.config/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        oma: {
          50: '#EFFDF5',
          100: '#DDA952',//yellow
          200: '#B3F5D1',
          300: '#034EA2',//blue
          400: '#00DC82',
          500: '#BC3C38',//red
          600: '#00A155',
          700: '#8252A0',//purple
          800: '#016538',
          900: '#8FD2C4',//cyan
          950: '#052e16'
        }
      }
    }
  },
  safelist: [
    {
      pattern: /gap-.*/
    }
  ]
}

