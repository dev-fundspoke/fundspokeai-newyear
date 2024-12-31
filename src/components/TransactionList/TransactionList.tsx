import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Transaction } from '../../types/transaction'

interface TransactionListProps {
  transactions: Transaction[]
}

const StyledListItem = styled(ListItem)<{ transactionType: 'income' | 'expense' }>(
  ({ transactionType, theme }) => ({
    marginBottom: theme.spacing(1),
    borderLeft: `4px solid ${
      transactionType === 'income' 
        ? theme.palette.success.main 
        : theme.palette.error.main
    }`,
  })
)

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Paper elevation={3} sx={{ mt: 3, p: 2 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Recent Transactions
      </Typography>
      <List>
        {transactions.map(transaction => (
          <StyledListItem 
            key={transaction.id}
            transactionType={transaction.type}
          >
            <ListItemText 
              primary={transaction.description}
              secondary={`$${transaction.amount.toFixed(2)}`}
            />
          </StyledListItem>
        ))}
      </List>
    </Paper>
  )
}