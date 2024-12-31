import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

interface BalanceCardProps {
  balance: number
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  margin: `${theme.spacing(3)} 0`,
}))

const BalanceAmount = styled(Typography)<{ balance: number }>(({ balance, theme }) => ({
  color: balance >= 0 ? theme.palette.success.main : theme.palette.error.main,
  fontSize: '2.5rem',
  margin: theme.spacing(1, 0),
}))

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" component="h2">Current Balance</Typography>
      <BalanceAmount balance={balance} variant="h3">
        ${balance.toFixed(2)}
      </BalanceAmount>
    </StyledPaper>
  )
}