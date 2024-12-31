import { TableRow, styled } from '@mui/material'

export const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F7F3F0',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FFFFFF',
  },
  '&:hover': {
    backgroundColor: 'rgba(100, 149, 237, 0.05)',
  },
  '& td': {
    color: '#333333',
  },
})