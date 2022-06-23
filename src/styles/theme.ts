export const theme = {
  colors: {
    white100: '#FFFFFF',
    white200: '#D4D4D4',

    blue100: '#224D74',
    black100: '#020202',
    orange100: '#F79028',

    gray100: '#3C3C3C',
    grayTwo100: '#989898'
  },
  fontSizes: {
    1: '0.75rem', // 12px
    2: '0.875rem', // 14px
    3: '1rem', // 16px
    4: '1.25rem', // 20px
    5: '1.5rem', // 24px
    6: '1.75rem', // 28px
    7: '2.875rem', // 46px
    8: '3.25rem', // 52px
    9: '4.5rem', // 72px
    10: '6.25rem' // 100px
  },
  fonts: {
    rubik: 'Rubik, apple-system, sans-serif',
    balboa: 'Balboa, apple-system, sans-serif'
  },
  space: {
    1: '0.5rem', // 8px
    2: '0.875rem', // 14px
    3: '1rem', // 16px
    4: '1.25rem', // 20px
    5: '1.5rem', // 24px
    6: '1.75rem', // 28px
    7: '2rem', // 32px
    8: '2.5rem', // 40px
    9: '2.875rem', // 46px
    10: '3rem', // 48px
    11: '3.5rem', // 56px
    12: '4rem', // 64px
    13: '4.5rem', // 72px
    14: '5rem' // 80px
  },
  sizes: {
    limit: '1280px'
  },
  radii: {
    box: '10px',
    button: '5px',
    input: '5px'
  },
  zIndices: {
    zero: 0,
    base: 50,
    image: 100,
    appBar: 150,
    fab: 200,
    popover: 250,
    dialog: 300
  },
  transitions: {
    buttonHover:
      'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-image 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  },
  media: {
    sm: '(min-width: 600px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1536px)',
    xxl: '(min-width: 1930px)'
  }
}

export type Theme = typeof theme
