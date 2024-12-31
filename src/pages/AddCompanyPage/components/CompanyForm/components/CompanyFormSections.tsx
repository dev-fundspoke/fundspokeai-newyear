import { Grid } from '@mui/material'
import { CompanyNames } from './sections/CompanyNames'
import { RegistrationNumbers } from './sections/RegistrationNumbers'
import { OrganizationDetails } from './sections/OrganizationDetails'

export function CompanyFormSections() {
  return (
    <Grid container spacing={3}>
      <CompanyNames />
      <RegistrationNumbers />
      <OrganizationDetails />
    </Grid>
  )
}