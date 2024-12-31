import { CompanyInformation } from '../../../types/company'

// Security rule templates
export const securityRules = {
  companies: {
    read: 'request.auth != null',
    create: `
      request.auth != null &&
      request.resource.data.createdAt == request.time &&
      request.resource.data.updatedAt == request.time
    `,
    update: `
      request.auth != null &&
      request.resource.data.updatedAt == request.time &&
      request.resource.data.createdAt == resource.data.createdAt
    `
  },
  storage: {
    companyLogos: `
      request.auth != null &&
      request.resource.size < 5 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
    `
  }
}

// Validation helpers
export const validateCompanyData = (data: Partial<CompanyInformation>): boolean => {
  return (
    data.companyName?.en?.length > 0 &&
    data.companyName?.fr?.length > 0 &&
    data.corporationNumber?.length > 0 &&
    typeof data.federalBusinessRegistryNumber === 'number' &&
    data.federalBusinessRegistryNumber > 0 &&
    data.organizationType?.length > 0 &&
    Array.isArray(data.sector) &&
    data.sector.length > 0
  )
}