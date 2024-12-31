import { useState } from 'react'
import { Box } from '@mui/material'
import { CompanyFormProvider } from './context/CompanyFormProvider'
import { FormContainer } from './components/FormContainer'
import { TabList } from './components/tabs/TabList'
import { TabContent } from './components/tabs/TabContent'
import { CompanyInfoTab, FinancialInfoTab, DocumentsTab } from './components/tabs'

function CompanyFormContent() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <FormContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <TabList value={tabValue} onChange={handleTabChange} />
      </Box>

      <TabContent value={tabValue} index={0}>
        <CompanyInfoTab />
      </TabContent>
      <TabContent value={tabValue} index={1}>
        <FinancialInfoTab />
      </TabContent>
      <TabContent value={tabValue} index={2}>
        <DocumentsTab />
      </TabContent>
    </FormContainer>
  )
}

export function CompanyForm() {
  return (
    <CompanyFormProvider>
      <CompanyFormContent />
    </CompanyFormProvider>
  )
}