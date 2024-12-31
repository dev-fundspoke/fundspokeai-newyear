import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface ChartSectionProps {
  title: string
  children: ReactNode
}

export function ChartSection({ title, children }: ChartSectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          color: '#333333',
          mb: 2,
          fontWeight: 500
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}