import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { TabPanel } from '../../../../../components/TabPanel'
import { CompanyInfoTab } from './tabs/CompanyInfoTab'
import { FinancialInfoTab } from './tabs/FinancialInfoTab'
import { DocumentsTab } from './tabs/DocumentsTab'

function a11yProps(index: number) {
  return {
    id: `company-form-tab-${index}`,
    'aria-controls': `company-form-tabpanel-${index}`,
  }
}

export function CompanyTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Company Information" {...a11yProps(0)} />
          <Tab label="Financial Information" {...a11yProps(1)} />
          <Tab label="Documents" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CompanyInfoTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FinancialInfoTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DocumentsTab />
      </TabPanel>
    </Box>
  )
}