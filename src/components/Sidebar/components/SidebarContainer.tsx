import { Box, styled } from '@mui/material'

interface SidebarContainerProps {
  isOpen: boolean
}

export const SidebarContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'isOpen'
})<SidebarContainerProps>(({ theme, isOpen }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: isOpen ? '240px' : '64px',
  backgroundColor: '#F7F3F0',
  background: `linear-gradient(to right, #F7F3F0, rgba(93, 155, 155, 0.3))`,
  transition: theme.transitions.create(['width', 'transform'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  boxShadow: '2px 0 12px rgba(0, 0, 0, 0.1)',
  zIndex: theme.zIndex.drawer,
  overflow: 'hidden',
}))