import { Box, styled } from '@mui/material'

export const ResponsiveTableContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  overflowX: 'auto',
  backgroundColor: '#FFFFFF',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  
  '& .MuiTable-root': {
    minWidth: 650,
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiTable-root': {
      minWidth: 450,
    },
    '& .hide-on-mobile': {
      display: 'none',
    },
  },
}))