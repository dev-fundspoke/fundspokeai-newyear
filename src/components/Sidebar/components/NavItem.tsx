import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import { ReactNode } from 'react'

interface NavItemProps {
  icon: ReactNode
  label: string
  isActive: boolean
  isExpanded: boolean
  onClick: () => void
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: prop => prop !== 'active'
})<{ active: boolean }>(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'color'],
    { duration: theme.transitions.duration.shorter }
  ),
  
  '& .MuiListItemIcon-root': {
    color: '#5D9B9B',
    minWidth: 40,
    transition: theme.transitions.create('color'),
  },
  
  '& .MuiListItemText-root': {
    margin: 0,
    transition: theme.transitions.create(['opacity', 'width']),
    '& .MuiTypography-root': {
      color: '#333333',
      fontFamily: 'Rajdhani, sans-serif',
      fontWeight: 500,
    },
  },

  ...(active && {
    backgroundColor: '#5D9B9B',
    boxShadow: '0 0 5px #33B0B0',
    
    '& .MuiListItemIcon-root': {
      color: '#FFFFFF',
    },
    
    '& .MuiListItemText-root .MuiTypography-root': {
      color: '#FFFFFF',
      fontWeight: 600,
    },
  }),

  '&:hover': {
    backgroundColor: active ? '#5D9B9B' : 'rgba(93, 155, 155, 0.1)',
  },
}))

export function NavItem({ 
  icon, 
  label, 
  isActive, 
  isExpanded, 
  onClick 
}: NavItemProps) {
  return (
    <StyledListItem
      onClick={onClick}
      active={isActive}
      sx={{ px: 2 }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      {isExpanded && (
        <ListItemText 
          primary={label}
          sx={{
            opacity: isExpanded ? 1 : 0,
            width: isExpanded ? 'auto' : 0,
          }}
        />
      )}
    </StyledListItem>
  )
}