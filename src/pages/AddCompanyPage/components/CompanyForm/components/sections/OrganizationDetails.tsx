import { Grid, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { FormField } from '../shared/FormField'
import { FormSection } from '../shared/FormSection'
import { useCompanyFormContext } from '../../context/hooks/useCompanyFormContext'
import { organizationTypes, sectors } from '../../constants'

export function OrganizationDetails() {
  const { formik } = useCompanyFormContext()

  return (
    <FormSection title="Organization Details">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            select
            name="organizationType"
            label="Organization Type"
            required
          >
            {organizationTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </FormField>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField
            fullWidth
            select
            name="sector"
            label="Sector"
            required
            SelectProps={{ multiple: true }}
          >
            {sectors.map(sector => (
              <MenuItem key={sector} value={sector}>
                {sector}
              </MenuItem>
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
      </Grid>
    </FormSection>
  )
}