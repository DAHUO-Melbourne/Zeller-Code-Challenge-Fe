export const theme = {
  colors: {
    brand: {
      primary: '#1d4ed8',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
    state: {
      selected: '#dbeafe',
      hoverPale: '#eff6ff',
      hoverSelected: '#bfdbfe',
    },
    background: {
      default: '#ffffff',
      transparent: 'transparent',
    },
    border: {
      light: '#e5e7eb',
    },
  },

  spacings: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  borderRadius: {
    md: '8px',
    lg: '10px',
  },

  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
  },
};

export type Theme = typeof theme;
