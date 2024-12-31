import { Typography, styled } from '@mui/material'

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#6495ED',
  fontWeight: 600,
  fontSize: '1.125rem',
  textAlign: 'center',
  marginTop: theme.spacing(1),
}))