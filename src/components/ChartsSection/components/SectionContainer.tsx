import { Box, styled } from '@mui/material'

export const SectionContainer = styled(Box)({
  backgroundColor: '#121A21',
  padding: '2rem',
  width: '100%',
})

export const ChartsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(34, 34, 34, 0.8)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 0 8px #00FFFF',
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}))