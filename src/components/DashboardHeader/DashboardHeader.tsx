import { Box, Typography, styled } from '@mui/material'

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.1,
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '120%',
    height: '120%',
    transform: 'translate(-50%, -50%)',
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23F7F3F0' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    zIndex: -1,
  }
}))

const Title = styled(Typography)({
  color: '#333333',
  fontWeight: 600,
  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
})

export function DashboardHeader() {
  return (
    <HeaderContainer>
      <Title variant="h3">
        Minimalist Finance Hub
      </Title>
    </HeaderContainer>
  )
}