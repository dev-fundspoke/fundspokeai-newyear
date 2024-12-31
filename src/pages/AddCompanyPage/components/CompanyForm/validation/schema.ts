import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  // Company Identity
  companyName: Yup.object().shape({
    en: Yup.string().required('English company name is required'),
    fr: Yup.string().required('French company name is required')
  }),
  corporationNumber: Yup.string().required('Corporation number is required'),
  federalBusinessRegistryNumber: Yup.number()
    .required('Federal business registry number is required')
    .min(0, 'Must be a positive number'),
  companyLogo: Yup.string().required('Company logo is required'),

  // Company Details
  organizationType: Yup.string().required('Organization type is required'),
  sector: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one sector must be selected'),
  incorporationDate: Yup.date().nullable().required('Incorporation date is required'),
  totalEmployeeCount: Yup.number()
    .required('Total employee count is required')
    .min(0, 'Must be a positive number'),

  // Company Metrics
  customerSatisfactionScore: Yup.number()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Customer satisfaction score is required'),
  grantMatchScore: Yup.number()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Grant match score is required'),
  innovationScore: Yup.number()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Innovation score is required'),
  queryPerformanceScore: Yup.number()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Query performance score is required'),

  // AI Analysis
  aiAnalysis: Yup.object().shape({
    aiAnalysisReady: Yup.boolean(),
    aiAnalysisDate: Yup.date().nullable(),
    aiImprovementRecommendations: Yup.string(),
    aiReadinessDetails: Yup.string()
  }),

  // Documents
  documents: Yup.array().of(
    Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string().required(),
      type: Yup.string().required(),
      url: Yup.string().required()
    })
  )
})