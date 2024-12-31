import { useEffect, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false) // Start collapsed
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    // Auto-collapse on mobile
    if (isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const toggle = () => setIsOpen(prev => !prev)

  return {
    isOpen,
    toggle,
    isMobile
  }
}