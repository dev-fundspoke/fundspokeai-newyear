import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import { ReactNode } from 'react'

interface SidebarItemProps {
  icon: ReactNode
  label: string
  isActive: boolean
  isExpanded: boolean
  onClick?: () => void
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: prop => prop !== 'active'
})<{ active?: boolean }>(({ theme, active }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'padding'],
    { duration: theme.transitions.duration.shortest }
  ),
  '& .MuiListItemText-root': {
    margin: 0,
    opacity: 1,
    transition: theme.transitions.create(['opacity', 'width'], {
      duration: theme.transitions.duration.standard,
    }),
    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
  },
  '& .MuiListItemIcon-root': {
    color: theme.palette.text.primary,
    minWidth: 40,
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0 0 8px ${theme.palette.primary.main}`,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiListItemText-root .MuiTypography-root': {
      color: theme.palette.primary.contrastText,
      fontWeight: 600,
    },
  }),
}))

export function SidebarItem({ 
  icon, 
  label, 
  isActive, 
  isExpanded, 
  onClick 
}: SidebarItemProps) {
  return (
    <StyledListItem
      onClick={onClick}
      active={isActive}
      sx={{ 
        justifyContent: 'flex-start',
        px: 2,
      }}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      {isExpanded && <ListItemText primary={label} />}
    </StyledListItem>
  )
}