import { Typography, styled } from '@mui/material'

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rajdhani, sans-serif',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 700,
  fontSize: '1.5rem',
  letterSpacing: '0.5px',
  textShadow: '0 0 8px rgba(51, 176, 176, 0.3)',
}))

export function Logo() {
  return (
    <LogoText variant="h6">
      FinanceHub
    </LogoText>
  )
}