import { useContext } from 'react'
import { CompanyFormContext } from '../CompanyFormContext'

export function useCompanyFormContext() {
  const context = useContext(CompanyFormContext)
  if (!context) {
    throw new Error('useCompanyFormContext must be used within CompanyFormProvider')
  }
  return context
}