import { Timestamp } from 'firebase/firestore'
import { CompanyFormData } from '../types'

export function transformFormData(values: CompanyFormData) {
  const now = Timestamp.now()

  return {
    company: {
      ...values.company,
      incorporationDate: values.company.incorporationDate 
        ? Timestamp.fromDate(new Date(values.company.incorporationDate))
        : null,
      createdAt: now,
      updatedAt: now
    },
    companies_financials: values.companies_financials.map(financial => ({
      ...financial,
      createdAt: now,
      updatedAt: now
    })),
    companies_personnel: {
      ...values.companies_personnel,
      createdAt: now,
      updatedAt: now
    },
    companies_contacts: {
      ...values.companies_contacts,
      createdAt: now,
      updatedAt: now
    },
    companies_ipPortfolio: {
      ...values.companies_ipPortfolio,
      createdAt: now,
      updatedAt: now
    },
    companies_technology: {
      ...values.companies_technology,
      createdAt: now,
      updatedAt: now
    },
    companies_projections: values.companies_projections.map(projection => ({
      ...projection,
      createdAt: now,
      updatedAt: now
    }))
  }
}