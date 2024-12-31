import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { Column, SortConfig } from '../types'

interface TableHeaderProps {
  columns: Column[]
  sortConfig: SortConfig | null
  onSort: (key: string) => void
}

export function TableHeader({ columns, sortConfig, onSort }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.key}
            sx={{
              color: '#333333',
              fontWeight: 600,
              backgroundColor: '#F7F3F0'
            }}
          >
            {column.sortable ? (
              <TableSortLabel
                active={sortConfig?.key === column.key}
                direction={sortConfig?.key === column.key ? sortConfig.direction : 'asc'}
                onClick={() => onSort(column.key)}
                sx={{ '&.MuiTableSortLabel-active': { color: '#6495ED' } }}
              >
                {column.label}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}