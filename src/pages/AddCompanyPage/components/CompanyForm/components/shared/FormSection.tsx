import { Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ReactNode } from 'react'

interface FormSectionProps {
  title: string
  children: ReactNode
  subtitle?: string
}

export function FormSection({ title, subtitle, children }: FormSectionProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: isMobile ? 'none' : 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <Box sx={{ mb: subtitle ? 1 : 3 }}>
        <Typography 
          variant={isMobile ? 'h6' : 'h5'} 
          sx={{ 
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 0.5
          }}
        >
          {title}
        </Typography>
        
        {subtitle && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mt: 0.5, mb: 2 }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {children}
    </Paper>
  )
}