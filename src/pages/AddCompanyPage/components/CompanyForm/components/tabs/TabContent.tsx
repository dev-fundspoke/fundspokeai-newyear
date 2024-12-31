import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface TabContentProps {
  children: ReactNode
  value: number
  index: number
}

export function TabContent({ children, value, index }: TabContentProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`company-form-tab-${index}`}
      aria-labelledby={`company-form-tab-${index}`}
      sx={{ py: 3 }}
    >
      {value === index && children}
    </Box>
  )
}