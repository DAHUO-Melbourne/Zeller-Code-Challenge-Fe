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
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '24px',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '15px',
    lg: '16px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },

  borderRadius: {
    md: '8px',
    lg: '10px',
  },
};

export type Theme = typeof theme;
