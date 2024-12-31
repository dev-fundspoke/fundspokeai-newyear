export const STORAGE_CATEGORIES = {
  LOGOS: 'logos',
  DOCUMENTS: 'documents',
  FINANCIAL_STATEMENTS: 'financial-statements'
} as const

export const FILE_CONSTRAINTS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ACCEPTED_IMAGE_TYPES: ['image/jpeg', 'image/png']
} as const

export const STORAGE_PATHS = {
  COMPANY_LOGOS: (companyId: string) => `companies/${companyId}/${STORAGE_CATEGORIES.LOGOS}`
} as const