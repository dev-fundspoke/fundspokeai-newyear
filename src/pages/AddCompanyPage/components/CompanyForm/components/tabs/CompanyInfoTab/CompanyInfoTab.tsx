import { Box, Grid, Paper, useTheme, useMediaQuery } from '@mui/material'
import { CompanyIdentity } from './sections/CompanyIdentity'
import { CompanyDetails } from './sections/CompanyDetails'
import { CompanyMetrics } from './sections/CompanyMetrics'
import { AIAnalysis } from './sections/AIAnalysis'

export function CompanyInfoTab() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <Grid 
        container 
        spacing={3}
        sx={{ 
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, sm: 3 }
        }}
      >
        {/* Main Information Column */}
        <Grid item xs={12} lg={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Company Identity Section */}
            <CompanyIdentity />
            
            {/* Company Details Section */}
            <CompanyDetails />
          </Box>
        </Grid>

        {/* Side Information Column */}
        <Grid item xs={12} lg={4}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3,
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Company Metrics Section */}
              <CompanyMetrics />
              
              {/* AI Analysis Section */}
              <AIAnalysis />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}