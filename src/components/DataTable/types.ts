export interface Column {
  key: string
  label: string
  sortable?: boolean
  hideOnMobile?: boolean
  render?: (value: any) => React.ReactNode
}

export interface SortConfig {
  key: string
  direction: 'asc' | 'desc'
}

export interface PaginationConfig {
  page: number
  rowsPerPage: number
}