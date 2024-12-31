import { CompanyInformation } from '../../../types/company'

export interface ValidationError {
  field: string
  message: string
}

export function validateCompanyData(data: Partial<CompanyInformation>): ValidationError[] {
  const errors: ValidationError[] = []

  // Required fields validation
  if (!data.companyName?.en?.trim()) {
    errors.push({ field: 'companyName.en', message: 'English company name is required' })
  }
  if (!data.companyName?.fr?.trim()) {
    errors.push({ field: 'companyName.fr', message: 'French company name is required' })
  }
  if (!data.corporationNumber?.trim()) {
    errors.push({ field: 'corporationNumber', message: 'Corporation number is required' })
  }
  if (!data.federalBusinessRegistryNumber || data.federalBusinessRegistryNumber <= 0) {
    errors.push({ 
      field: 'federalBusinessRegistryNumber', 
      message: 'Valid federal business registry number is required' 
    })
  }
  if (!data.organizationType?.trim()) {
    errors.push({ field: 'organizationType', message: 'Organization type is required' })
  }
  if (!Array.isArray(data.sector) || data.sector.length === 0) {
    errors.push({ field: 'sector', message: 'At least one sector must be selected' })
  }

  // Number field validations
  const scoreFields = [
    'customerSatisfactionScore',
    'grantMatchScore',
    'innovationScore',
    'queryPerformanceScore'
  ] as const

  scoreFields.forEach(field => {
    const score = data[field]
    if (score !== null && (typeof score !== 'number' || score < 0 || score > 100)) {
      errors.push({ field, message: `${field} must be between 0 and 100` })
    }
  })

  // Employee count validation
  if (data.totalEmployeeCount !== null && 
      (typeof data.totalEmployeeCount !== 'number' || data.totalEmployeeCount < 0)) {
    errors.push({ field: 'totalEmployeeCount', message: 'Employee count must be non-negative' })
  }

  // Financial validations
  if (data.annualFinancials) {
    const { year, revenue, profit, rdExpense } = data.annualFinancials
    
    if (!year || year < 1900 || year > new Date().getFullYear()) {
      errors.push({ field: 'annualFinancials.year', message: 'Invalid financial year' })
    }
    if (typeof revenue !== 'number' || revenue < 0) {
      errors.push({ field: 'annualFinancials.revenue', message: 'Revenue must be non-negative' })
    }
    if (typeof profit !== 'number') {
      errors.push({ field: 'annualFinancials.profit', message: 'Profit is required' })
    }
    if (typeof rdExpense !== 'number' || rdExpense < 0) {
      errors.push({ field: 'annualFinancials.rdExpense', message: 'R&D expense must be non-negative' })
    }
  }

  return errors
}