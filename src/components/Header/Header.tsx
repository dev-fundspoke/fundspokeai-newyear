import { Box, Stack, styled } from '@mui/material'
import { useState } from 'react'
import { Logo } from './components/Logo'
import { NotificationBell } from './components/NotificationBell'
import { UserAvatar } from './components/UserAvatar'

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(2, 3),
  backgroundColor: '#F7F3F0',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  backdropFilter: 'blur(8px)',
}))

export function Header() {
  const [hasNotifications] = useState(true)

  return (
    <HeaderContainer>
      <Logo />
      
      <Stack direction="row" spacing={2} alignItems="center">
        <NotificationBell hasNotifications={hasNotifications} />
        <UserAvatar />
      </Stack>
    </HeaderContainer>
  )
}