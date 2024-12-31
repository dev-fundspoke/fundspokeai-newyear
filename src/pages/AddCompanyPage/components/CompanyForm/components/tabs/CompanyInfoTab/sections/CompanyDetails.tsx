import { Grid, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { FormSection } from '../../../shared/FormSection'
import { FormField } from '../../../shared/FormField'
import { useCompanyFormContext } from '../../../../context'
import { ORGANIZATION_TYPES, SECTORS } from './constants'

export function CompanyDetails() {
  const { formik } = useCompanyFormContext()

  return (
    <FormSection 
      title="Company Details"
      subtitle="Organization type and key information"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormField
            select
            name="organizationType"
            label="Organization Type"
            required
            fullWidth
          >
            {ORGANIZATION_TYPES.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </FormField>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormField
            select
            name="sector"
            label="Sector"
            SelectProps={{ multiple: true }}
            required
            fullWidth
          >
            {SECTORS.map(sector => (
              <MenuItem key={sector} value={sector}>{sector}</MenuItem>
            ))}
          </FormField>
        </Grid>

        <Grid item xs={12} md={6}>
          <DatePicker
            label="Incorporation Date"
            value={formik.values.incorporationDate}
            onChange={(date) => formik.setFieldValue('incorporationDate', date)}
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
                error: Boolean(formik.touched.incorporationDate && formik.errors.incorporationDate),
                helperText: formik.touched.incorporationDate && formik.errors.incorporationDate as string
              }
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField
            name="totalEmployeeCount"
            label="Total Employees"
            type="number"
            required
            fullWidth
            inputProps={{ min: 0 }}
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}