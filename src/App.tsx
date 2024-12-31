import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { AddCompanyPage } from './pages/AddCompanyPage/AddCompanyPage'
import { Box, CircularProgress } from '@mui/material'

function App() {
  const { loading } = useAuth()

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/companies/add" element={<AddCompanyPage />} />
    </Routes>
  )
}

export default App