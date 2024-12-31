import * as Yup from 'yup'

export const companyInformationSchema = Yup.object().shape({
  // Company Names
  companyName: Yup.object().shape({
    en: Yup.string()
      .required('English company name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must not exceed 100 characters'),
    fr: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must not exceed 100 characters')
  }),

  // Registration Numbers
  corporationNumber: Yup.string()
    .required('Corporation number is required')
    .matches(/^[A-Za-z0-9-]+$/, 'Corporation number must contain only letters, numbers, and hyphens')
    .min(4, 'Corporation number must be at least 4 characters')
    .max(20, 'Corporation number must not exceed 20 characters'),

  federalBusinessRegistryNumber: Yup.number()
    .required('Federal business registry number is required')
    .positive('Must be a positive number')
    .integer('Must be an integer'),

  // Organization Details
  organizationType: Yup.string()
    .required('Organization type is required')
    .oneOf(
      ['For Profit', 'Non Profit', 'Cooperative', 'Partnership', 'Sole Proprietorship', 'Crown Corporation', 'Other'],
      'Invalid organization type'
    ),

  incorporationDate: Yup.date()
    .required('Incorporation date is required')
    .max(new Date(), 'Incorporation date cannot be in the future')
    .nullable(),

  // Sector
  sector: Yup.array()
    .of(Yup.string())
    .required('At least one sector must be selected')
    .min(1, 'Select at least one sector'),

  // Company Logo
  companyLogo: Yup.string()
    .required('Company logo is required')
    .url('Must be a valid URL'),

  // Performance Metrics
  customerSatisfactionScore: Yup.number()
    .required('Customer satisfaction score is required')
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),

  grantMatchScore: Yup.number()
    .required('Grant match score is required')
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),

  innovationScore: Yup.number()
    .required('Innovation score is required')
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),

  queryPerformanceScore: Yup.number()
    .required('Query performance score is required')
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),

  totalEmployeeCount: Yup.number()
    .required('Total employee count is required')
    .min(1, 'Must have at least 1 employee')
    .integer('Must be a whole number')
    .nullable(),

  // AI Analysis
  aiAnalysis: Yup.object().shape({
    aiAnalysisDate: Yup.date().nullable(),
    aiAnalysisReady: Yup.boolean(),
    aiImprovementRecommendations: Yup.string(),
    aiReadinessDetails: Yup.string()
  }),

  // Client Details
  clientId: Yup.string()
    .required('Client ID is required')
    .min(4, 'Client ID must be at least 4 characters')
    .max(50, 'Client ID must not exceed 50 characters')
})