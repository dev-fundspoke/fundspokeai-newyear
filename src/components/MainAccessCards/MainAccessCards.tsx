import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AccessCard } from '../AccessCard/AccessCard'
import { AddCompanyIcon, AnalyticsIcon, FundingIcon, SearchIcon } from '../AccessCard/components/MinimalistIcons'

export function MainAccessCards() {
  const navigate = useNavigate()

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <AccessCard
          title="Add Company"
          icon={<AddCompanyIcon />}
          onClick={() => navigate('/companies/add')}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AccessCard
          title="Company Search"
          icon={<SearchIcon />}
          onClick={() => console.log('Search clicked')}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AccessCard
          title="Key Analytics"
          icon={<AnalyticsIcon />}
          onClick={() => console.log('Analytics clicked')}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AccessCard
          title="Funding Application"
          icon={<FundingIcon />}
          onClick={() => console.log('Funding clicked')}
        />
      </Grid>
    </Grid>
  )
}