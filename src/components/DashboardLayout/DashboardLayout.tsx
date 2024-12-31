import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { DynamicBackground } from './components/DynamicBackground'
import { MenuToggle } from './components/MenuToggle'
import { useSidebar } from './hooks/useSidebar'

interface DashboardLayoutProps {
  header: ReactNode
  children: ReactNode
}

const LayoutContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'sidebarOpen' && prop !== 'isMobile'
})<{ sidebarOpen: boolean; isMobile: boolean }>(({ theme, sidebarOpen, isMobile }) => ({
  display: 'grid',
  gridTemplateAreas: `
    "sidebar header"
    "sidebar main"
  `,
  gridTemplateColumns: `${sidebarOpen ? '240px' : '64px'} 1fr`,
  gridTemplateRows: 'auto 1fr',
  minHeight: '100vh',
  position: 'relative',
  transition: theme.transitions.create(['grid-template-columns', 'padding-left'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),

  ...(isMobile && {
    gridTemplateColumns: '0 1fr',
    paddingLeft: sidebarOpen ? '240px' : 0,
  }),
}))

const Header = styled(Box)(({ theme }) => ({
  gridArea: 'header',
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}))

const Main = styled(Box)(({ theme }) => ({
  gridArea: 'main',
  padding: theme.spacing(3),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}))

const SidebarWrapper = styled(Box)(({ theme }) => ({
  gridArea: 'sidebar',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}))

export function DashboardLayout({ header, children }: DashboardLayoutProps) {
  const { isOpen, toggle, isMobile } = useSidebar()

  return (
    <>
      <DynamicBackground />
      <LayoutContainer sidebarOpen={isOpen} isMobile={isMobile}>
        <SidebarWrapper>
          <Sidebar isOpen={isOpen} onToggle={toggle} />
        </SidebarWrapper>
        
        <Header>
          {isMobile && <MenuToggle onClick={toggle} isMobile />}
          {header}
        </Header>
        
        <Main>{children}</Main>
      </LayoutContainer>
    </>
  )
}