import { Grid } from '@mui/material'
import { FormField } from '../shared/FormField'
import { FormSection } from '../shared/FormSection'

export function FinancialInfoTab() {
  return (
    <>
      <FormSection title="Basic Financial Information">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormField
              fullWidth
              name="annualRevenue"
              label="Annual Revenue"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              fullWidth
              name="employeeCount"
              label="Number of Employees"
              type="number"
              required
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection title="Financial Metrics">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormField
              fullWidth
              name="financialMetrics.profitMargin"
              label="Profit Margin (%)"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField
              fullWidth
              name="financialMetrics.revenueGrowth"
              label="Revenue Growth (%)"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField
              fullWidth
              name="financialMetrics.cashFlow"
              label="Cash Flow"
              type="number"
              required
            />
          </Grid>
        </Grid>
      </FormSection>
    </>
  )
}