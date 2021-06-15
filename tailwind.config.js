const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },

        fontSize: {
            'xl': '4rem', // 64px
            'lg': '3rem', // 48px
            'md': '1.75rem', // 24px
            'base': '1.125rem', // 18px
            'sm': '1.rem', // 16px
        },

        fontWeight: {
            'bold': '700',
            'semibold': '600',
            'medium': '500',
            'regular': '400',
            'light': '300',
        },

        colors: {
            'blue-1': '#3B6DF6',
            'blue-2': '#5B86FB',
            'blue-3': '#7096FF',
            'blue-4': '#B4C8FF',
            'black-1': '#171717',
            'black-2': '#242424',
            'black-3': '#333333',
            'gray-1': '#DBDBDB',
            'text-gray': '#A5A5A5',
        },

        maxWidth: {
            'container': '92.5rem'
        },
      },
    },
    variants: {},
    plugins: [],
  }
