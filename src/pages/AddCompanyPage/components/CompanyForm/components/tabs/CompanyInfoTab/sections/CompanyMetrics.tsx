import { Grid } from '@mui/material'
import { FormSection } from '../../../shared/FormSection'
import { MetricField } from './MetricField'

export function CompanyMetrics() {
  return (
    <FormSection 
      title="Company Metrics"
      subtitle="Performance indicators (0-100)"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <MetricField
            name="customerSatisfactionScore"
            label="Customer Sat."
            placeholder="0-100"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <MetricField
            name="grantMatchScore"
            label="Grant Match"
            placeholder="0-100"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <MetricField
            name="innovationScore"
            label="Innovation"
            placeholder="0-100"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <MetricField
            name="queryPerformanceScore"
            label="Query Perf."
            placeholder="0-100"
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}