import { Container } from '@mui/material'
import { useState } from 'react'
import { ActionButtons } from '../../components/ActionButtons/ActionButtons'
import { BalanceCard } from '../../components/BalanceCard/BalanceCard'
import { DashboardLayout } from '../../components/DashboardLayout/DashboardLayout'
import { Header } from '../../components/Header/Header'
import { TransactionList } from '../../components/TransactionList/TransactionList'
import { Transaction } from '../../types/transaction'
import { calculateBalance, createTransaction } from '../../utils/transactionHelpers'

export function HomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleAddTransaction = (type: 'income' | 'expense') => {
    const amount = parseFloat(prompt(`Enter ${type} amount:`) || '0')
    const description = prompt(`Enter ${type} description:`) || ''
    
    if (amount && description) {
      const newTransaction = createTransaction(type, amount, description)
      setTransactions(prev => [...prev, newTransaction])
    }
  }

  const balance = calculateBalance(transactions)

  return (
    <DashboardLayout header={<Header />}>
      <Container maxWidth="md">
        <h1>Minimalist Finance Hub</h1>
        
        <BalanceCard balance={balance} />
        <ActionButtons 
          onAddIncome={() => handleAddTransaction('income')}
          onAddExpense={() => handleAddTransaction('expense')}
        />
        <TransactionList transactions={transactions} />
      </Container>
    </DashboardLayout>
  )
}