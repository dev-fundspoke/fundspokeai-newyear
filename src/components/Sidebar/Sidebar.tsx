import { Box, IconButton, List } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuIcon } from '../icons'
import { NavItem } from './components/NavItem'
import { SidebarContainer } from './components/SidebarContainer'
import { navItems } from './sidebarConfig'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <SidebarContainer isOpen={isOpen}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: isOpen ? 'flex-end' : 'center' }}>
        <IconButton 
          onClick={onToggle} 
          color="inherit"
          sx={{ color: '#5D9B9B' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <List sx={{ px: 2 }}>
        {navItems.map(({ path, label, icon }) => (
          <NavItem
            key={path}
            icon={icon}
            label={label}
            isActive={location.pathname === path}
            isExpanded={isOpen}
            onClick={() => navigate(path)}
          />
        ))}
      </List>
    </SidebarContainer>
  )
}