import { Typography, styled } from '@mui/material'

export const ChartTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rajdhani, sans-serif',
  color: '#EEEEEE',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '0 0 3px #00FFFF',
  fontWeight: 600,
  fontSize: '1.5rem',
}))