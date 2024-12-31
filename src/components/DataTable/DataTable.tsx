import { Table, TableBody, TableCell } from '@mui/material'
import { useState } from 'react'
import { ResponsiveTableContainer } from './components/TableContainer'
import { StyledTableRow } from './components/StyledTableRow'
import { TableHeader } from './components/TableHeader'
import { TablePagination } from './components/TablePagination'
import { useTableSort } from './hooks/useTableSort'
import { Column, PaginationConfig } from './types'

interface DataTableProps<T> {
  data: T[]
  columns: Column[]
  initialSort?: { key: string; direction: 'asc' | 'desc' }
}

export function DataTable<T extends Record<string, any>>({ 
  data,
  columns,
  initialSort
}: DataTableProps<T>) {
  const { sortedData, sortConfig, handleSort } = useTableSort(data, initialSort)
  const [paginationConfig, setPaginationConfig] = useState<PaginationConfig>({
    page: 0,
    rowsPerPage: 10
  })

  const paginatedData = sortedData.slice(
    paginationConfig.page * paginationConfig.rowsPerPage,
    (paginationConfig.page + 1) * paginationConfig.rowsPerPage
  )

  return (
    <ResponsiveTableContainer>
      <Table>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
        />
        <TableBody>
          {paginatedData.map((row, index) => (
            <StyledTableRow key={index}>
              {columns.map(column => (
                <TableCell 
                  key={column.key}
                  className={column.hideOnMobile ? 'hide-on-mobile' : ''}
                >
                  {column.render
                    ? column.render(row[column.key])
                    : row[column.key]}
                </TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        count={data.length}
        config={paginationConfig}
        onPageChange={(page) => setPaginationConfig(prev => ({ ...prev, page }))}
        onRowsPerPageChange={(rowsPerPage) => 
          setPaginationConfig({ page: 0, rowsPerPage })}
      />
    </ResponsiveTableContainer>
  )
}