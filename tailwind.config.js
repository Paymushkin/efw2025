/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '2rem', // 32px
        full: '9999px',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.2' }], // 14px
        base: ['1rem', { lineHeight: '1.2' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.5rem', { lineHeight: '1.1' }], // 24px
        '2xl': ['2rem', { lineHeight: '1.1' }], // 32px
        '3xl': ['2.125rem', { lineHeight: '1.2' }], // 34px
        '4xl': ['3rem', { lineHeight: '1.2' }], // 48px
        '5xl': ['4.625rem', { lineHeight: '1.1' }], // 74px
        '6xl': ['7.5rem', { lineHeight: '1.1' }], // 120px
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        'black-16': 'rgba(0, 0, 0, 0.16)',
      },
    },
    container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				// sm: '2rem',
				// lg: '4rem',
				// xl: '50px',
				// '2xl': '80px',
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
				'2xl': '1833px'
			}
		}
  },
  plugins: [],
};
