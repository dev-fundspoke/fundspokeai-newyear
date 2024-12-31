import { Grid } from '@mui/material'
import { FormField } from '../shared/FormField'
import { FormSection } from '../shared/FormSection'

export function CompanyNames() {
  return (
    <FormSection title="Company Names">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            name="companyName.en"
            label="Company Name (English)"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            name="companyName.fr"
            label="Company Name (French)"
            required
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}