import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material'
import { PaginationConfig } from '../types'

interface TablePaginationProps {
  count: number
  config: PaginationConfig
  onPageChange: (page: number) => void
  onRowsPerPageChange: (rowsPerPage: number) => void
}

export function TablePagination({
  count,
  config,
  onPageChange,
  onRowsPerPageChange
}: TablePaginationProps) {
  const { page, rowsPerPage } = config
  const totalPages = Math.ceil(count / rowsPerPage)

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 2,
      mt: 2 
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2">Rows per page:</Typography>
        <Select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          size="small"
          sx={{ minWidth: 80 }}
        >
          {[5, 10, 25, 50].map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton 
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0}
          size="small"
          sx={{ color: '#6495ED' }}
        >
          {'<'}
        </IconButton>
        <Typography variant="body2">
          {`${page + 1} of ${totalPages}`}
        </Typography>
        <IconButton
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages - 1}
          size="small"
          sx={{ color: '#6495ED' }}
        >
          {'>'}
        </IconButton>
      </Box>
    </Box>
  )
}