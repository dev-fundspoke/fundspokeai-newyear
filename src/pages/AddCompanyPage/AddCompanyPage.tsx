import { Container, Typography } from '@mui/material'
import { DashboardLayout } from '../../components/DashboardLayout/DashboardLayout'
import { Header } from '../../components/Header/Header'
import { CompanyForm } from './components/CompanyForm'

export function AddCompanyPage() {
  return (
    <DashboardLayout header={<Header />}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4,
            fontWeight: 600,
            color: 'text.primary',
            textAlign: 'center'
          }}
        >
          Add New Company
        </Typography>
        <CompanyForm />
      </Container>
    </DashboardLayout>
  )
}