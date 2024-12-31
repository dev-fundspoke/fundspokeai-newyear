import { IconButton, styled } from '@mui/material'
import { MenuIcon } from '../../icons'

interface MenuToggleProps {
  onClick: () => void
  isMobile?: boolean
}

const ToggleButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'isMobile'
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  ...(isMobile ? {
    position: 'fixed',
    top: theme.spacing(1),
    left: theme.spacing(1),
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  } : {
    marginRight: theme.spacing(2),
  }),
}))

export function MenuToggle({ onClick, isMobile }: MenuToggleProps) {
  return (
    <ToggleButton
      onClick={onClick}
      color="inherit"
      size="small"
      isMobile={isMobile}
    >
      <MenuIcon />
    </ToggleButton>
  )
}