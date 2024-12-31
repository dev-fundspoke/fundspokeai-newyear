import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

export function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`company-form-tabpanel-${index}`}
      aria-labelledby={`company-form-tab-${index}`}
      sx={{
        p: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        minHeight: '400px',
        display: value === index ? 'block' : 'none',
        overflowY: 'auto',
        maxHeight: 'calc(80vh - 150px)'
      }}
    >
      {value === index && children}
    </Box>
  )
}