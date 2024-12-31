import { Timestamp } from 'firebase/firestore'

export interface CompanyInformation {
  id: string
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  incorporationDate: Timestamp | null
  organizationType: string
  sector: string[]
  companyLogo: string
  customerSatisfactionScore: number | null
  environmentalImpact: string
  grantMatchScore: number | null
  innovationScore: number | null
  queryPerformanceScore: number | null
  totalEmployeeCount: number | null
  aiAnalysis: {
    aiAnalysisDate: Timestamp | null
    aiAnalysisReady: boolean
    aiImprovementRecommendations: string
    aiReadinessDetails: string
  }
  clientId: string
  annualFinancials: {
    year: number
    revenue: number
    profit: number
    rdExpense: number
  }
  financialStatements: {
    documentCategory: string
    documentType: string
    fileId: string
  }
  createdAt: Timestamp
  updatedAt: Timestamp
}