import { Tab, Tabs, styled } from '@mui/material'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: theme.shape.borderRadius
  }
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  marginRight: theme.spacing(4),
  padding: theme.spacing(2, 0),
  transition: 'color 0.2s',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 600
  }
}))

interface TabListProps {
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

export function TabList({ value, onChange }: TabListProps) {
  return (
    <StyledTabs value={value} onChange={onChange}>
      <StyledTab label="Company Information" />
      <StyledTab label="Financial Information" />
      <StyledTab label="Documents" />
    </StyledTabs>
  )
}