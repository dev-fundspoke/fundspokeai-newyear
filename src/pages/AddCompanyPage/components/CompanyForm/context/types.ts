import { Timestamp } from 'firebase/firestore'

export interface CompanyFormValues {
  // Company Identity
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  logoFile: File | null // Add logoFile field
  companyLogo: string

  // Company Details
  organizationType: string
  sector: string[]
  incorporationDate: Date | null
  totalEmployeeCount: number

  // Company Metrics
  customerSatisfactionScore: number
  grantMatchScore: number
  innovationScore: number
  queryPerformanceScore: number

  // AI Analysis
  aiAnalysis: {
    aiAnalysisReady: boolean
    aiAnalysisDate: Date | null
    aiImprovementRecommendations: string
    aiReadinessDetails: string
  }

  // Documents
  documents: Array<{
    id: string
    name: string
    type: string
    url: string
  }>

  // System Fields
  createdAt: Timestamp | null
  updatedAt: Timestamp | null
}