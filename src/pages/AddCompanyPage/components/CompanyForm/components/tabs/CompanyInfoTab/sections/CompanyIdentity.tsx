import { Grid } from '@mui/material'
import { FormSection } from '../../../shared/FormSection'
import { FormField } from '../../../shared/FormField'
import { CompanyLogoUpload } from '../../../shared/CompanyLogo/CompanyLogoUpload'
import { useCompanyFormContext } from '../../../../context'

export function CompanyIdentity() {
  const { formik } = useCompanyFormContext()

  return (
    <FormSection 
      title="Company Identity"
      subtitle="Enter your company's basic identification information"
    >
      <Grid container spacing={3}>
        {/* Company Logo */}
        <Grid item xs={12}>
          <CompanyLogoUpload
            value={formik.values.companyLogo}
            onChange={(url) => formik.setFieldValue('companyLogo', url)}
          />
        </Grid>

        {/* Company Names */}
        <Grid item xs={12} sm={6}>
          <FormField
            name="companyName.en"
            label="Company Name (English)"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="companyName.fr"
            label="Company Name (French)"
            required
            fullWidth
          />
        </Grid>

        {/* Registration Numbers */}
        <Grid item xs={12} sm={6}>
          <FormField
            name="corporationNumber"
            label="Corporation Number"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="federalBusinessRegistryNumber"
            label="Federal Business Registry Number"
            type="number"
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </FormSection>
  )
}