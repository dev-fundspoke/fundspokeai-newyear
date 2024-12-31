import * as Yup from 'yup'

export const financialValidationSchema = Yup.object().shape({
  annualFinancials: Yup.object().shape({
    year: Yup.number()
      .required('Year is required')
      .min(1900, 'Year must be after 1900')
      .max(new Date().getFullYear(), 'Year cannot be in the future'),
    revenue: Yup.number()
      .required('Revenue is required')
      .min(0, 'Revenue must be non-negative'),
    profit: Yup.number()
      .required('Profit is required'),
    rdExpense: Yup.number()
      .required('R&D Expense is required')
      .min(0, 'R&D Expense must be non-negative')
  }),

  financialStatements: Yup.object().shape({
    documentCategory: Yup.string()
      .required('Document category is required')
      .oneOf(['Financial', 'Tax', 'Audit', 'Other'], 'Invalid document category'),
    documentType: Yup.string()
      .required('Document type is required')
      .oneOf([
        'Balance Sheet',
        'Income Statement',
        'Cash Flow Statement',
        'Tax Return',
        'Audit Report',
        'Other'
      ], 'Invalid document type'),
    fileId: Yup.string()
      .required('Financial statement document is required')
  })
})