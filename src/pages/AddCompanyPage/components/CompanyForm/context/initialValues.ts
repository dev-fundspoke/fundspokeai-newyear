import { CompanyFormValues } from './types'

export const initialValues: CompanyFormValues = {
  // Company Identity
  companyName: {
    en: '',
    fr: ''
  },
  corporationNumber: '',
  federalBusinessRegistryNumber: 0,
  logoFile: null,
  companyLogo: '',

  // Company Details
  organizationType: '',
  sector: [],
  incorporationDate: null,
  totalEmployeeCount: 0,

  // Company Metrics
  customerSatisfactionScore: 0,
  grantMatchScore: 0,
  innovationScore: 0,
  queryPerformanceScore: 0,

  // AI Analysis
  aiAnalysis: {
    aiAnalysisReady: false,
    aiAnalysisDate: null,
    aiImprovementRecommendations: '',
    aiReadinessDetails: ''
  },

  // Documents
  documents: [],

  // System Fields
  createdAt: null,
  updatedAt: null
}