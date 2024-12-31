import { Grid } from '@mui/material'
import { FormSection } from '../../../shared/FormSection'
import { FormField } from '../../../shared/FormField'

export function AIAnalysis() {
  return (
    <FormSection 
      title="AI Analysis"
      subtitle="AI-powered insights and recommendations"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField
            name="aiAnalysis.aiImprovementRecommendations"
            label="Improvement Recommendations"
            multiline
            rows={4}
            placeholder="AI-generated recommendations will appear here"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormField
            name="aiAnalysis.aiReadinessDetails"
            label="Readiness Details"
            multiline
            rows={4}
            placeholder="AI readiness assessment details will appear here"
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}