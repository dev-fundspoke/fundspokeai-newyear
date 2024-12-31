import { Card, styled } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: theme.transitions.create(
    ['transform', 'background-color', 'box-shadow'],
    { duration: theme.transitions.duration.shorter }
  ),
  '&:hover': {
    transform: 'scale(1.02)',
    backgroundColor: 'rgba(250, 128, 114, 0.2)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}))