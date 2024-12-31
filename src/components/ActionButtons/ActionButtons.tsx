import { Button, Stack } from '@mui/material'

interface ActionButtonsProps {
  onAddIncome: () => void
  onAddExpense: () => void
}

export function ActionButtons({ onAddIncome, onAddExpense }: ActionButtonsProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ my: 3 }}>
      <Button 
        variant="contained" 
        color="success" 
        fullWidth 
        onClick={onAddIncome}
      >
        Add Income
      </Button>
      <Button 
        variant="contained" 
        color="error" 
        fullWidth 
        onClick={onAddExpense}
      >
        Add Expense
      </Button>
    </Stack>
  )
}