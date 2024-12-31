import { 
  AnalyticsIcon,
  DashboardIcon,
  SettingsIcon,
  TransactionsIcon 
} from '../icons'

export const navItems = [
  { path: '/', label: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/transactions', label: 'Transactions', icon: <TransactionsIcon /> },
  { path: '/analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
  { path: '/settings', label: 'Settings', icon: <SettingsIcon /> },
]