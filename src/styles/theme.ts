import { createTheme } from '@mui/material/styles'

// Custom color palette
const colors = {
  primary: '#5D9B9B',    // soft teal
  secondary: '#E09F9F',  // muted coral
  accent: '#33B0B0',     // brighter teal
  negative: '#C77D7D',   // dusty rose
  background: '#F7F3F0',  // light warm gray with hint of blush
  cardBackground: 'rgba(229, 224, 220, 0.7)', // semi-transparent warm gray
  textPrimary: '#333333', // dark charcoal gray
  textSecondary: '#666666', // lighter gray
} as const

// Create custom theme
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#FFFFFF',
    },
    error: {
      main: colors.negative,
    },
    background: {
      default: colors.background,
      paper: colors.cardBackground,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    mode: 'light',
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      color: colors.textPrimary,
    },
    h2: {
      color: colors.textPrimary,
    },
    h3: {
      color: colors.textPrimary,
    },
    h4: {
      color: colors.textPrimary,
    },
    h5: {
      color: colors.textPrimary,
    },
    h6: {
      color: colors.textPrimary,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: colors.cardBackground,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.cardBackground}`,
        },
        head: {
          fontWeight: 600,
          color: colors.textPrimary,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
  },
})