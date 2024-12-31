import { Container } from '@mui/material'
import { DashboardHeader } from '../../components/DashboardHeader/DashboardHeader'
import { DashboardLayout } from '../../components/DashboardLayout/DashboardLayout'
import { Header } from '../../components/Header/Header'
import { KeyAnalyticsPreview } from '../../components/KeyAnalyticsPreview/KeyAnalyticsPreview'
import { MainAccessCards } from '../../components/MainAccessCards/MainAccessCards'

export function DashboardPage() {
  return (
    <DashboardLayout header={<Header />}>
      <Container maxWidth="lg">
        <DashboardHeader />
        <MainAccessCards />
        <KeyAnalyticsPreview />
      </Container>
    </DashboardLayout>
  )
}