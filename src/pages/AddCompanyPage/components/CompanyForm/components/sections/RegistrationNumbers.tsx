import { Grid } from '@mui/material'
import { FormField } from '../shared/FormField'
import { FormSection } from '../shared/FormSection'

export function RegistrationNumbers() {
  return (
    <FormSection title="Registration Information">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            name="corporationNumber"
            label="Corporation Number"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            name="federalBusinessRegistryNumber"
            label="Federal Business Registry Number"
            type="number"
            required
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}