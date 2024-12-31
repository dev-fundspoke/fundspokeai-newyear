import { CompanyBase } from '../types/companyTypes'

interface ValidationError {
  field: string
  message: string
}

export function validateCompanyData(data: Partial<CompanyBase>): ValidationError[] {
  const errors: ValidationError[] = []

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

  return errors
}