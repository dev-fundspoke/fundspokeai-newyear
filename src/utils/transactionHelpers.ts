import { Transaction } from '../types/transaction'

export const createTransaction = (
  type: 'income' | 'expense',
  amount: number,
  description: string
): Transaction => ({
  id: Date.now(),
  description,
  amount,
  type,
})

export const calculateBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income'
      ? acc + transaction.amount
      : acc - transaction.amount
  }, 0)
}