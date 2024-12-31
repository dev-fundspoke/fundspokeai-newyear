import { Timestamp } from 'firebase/firestore'

export interface CompanyBase {
  id: string
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  organizationType: string
  sector: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface CompanyMetrics {
  customerSatisfactionScore: number
  grantMatchScore: number
  innovationScore: number
  queryPerformanceScore: number
  totalEmployeeCount: number
}

export interface CompanyCreateResponse {
  companyId: string
  success: boolean
  error?: string
}