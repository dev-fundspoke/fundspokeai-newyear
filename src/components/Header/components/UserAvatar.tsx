import { Avatar, styled } from '@mui/material'

const StyledAvatar = styled(Avatar)({
  backgroundColor: '#33B0B0',
  color: '#FFFFFF',
  border: '2px solid rgba(51, 176, 176, 0.3)',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 8px rgba(51, 176, 176, 0.5)',
  },
})

export function UserAvatar() {
  return (
    <StyledAvatar>U</StyledAvatar>
  )
}