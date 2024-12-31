import { Timestamp } from 'firebase/firestore'

// Base document interface
interface BaseDocument {
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Main company information
export interface CompanyInformation extends BaseDocument {
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  organizationType: string
  sector: string[]
  incorporationDate: Timestamp | null
}

// Financial information sub-collection
export interface FinancialInformation extends BaseDocument {
  year: number
  annualRevenue: number
  profitMargin: number
  revenueGrowth: number
  cashFlow: number
  statements: FinancialStatement[]
}

export interface FinancialStatement extends BaseDocument {
  type: 'income' | 'balance' | 'cashflow'
  year: number
  quarter?: 1 | 2 | 3 | 4
  documentUrl: string
}

// Personnel information sub-collection
export interface PersonnelInformation extends BaseDocument {
  employees: {
    total: number
    fullTime: number
    partTime: number
    contractors: number
  }
  demographics: {
    women: number
    minorities: number
    veterans: number
    youth: number
    disabilities: number
  }
}

// Contact information sub-collection
export interface ContactInformation extends BaseDocument {
  contacts: Contact[]
  addresses: Address[]
}

export interface Contact extends BaseDocument {
  type: 'primary' | 'secondary'
  name: string
  title: string
  email: string
  phone: string
}

export interface Address extends BaseDocument {
  type: 'business' | 'legal' | 'mailing'
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

// IP Portfolio sub-collection
export interface IpPortfolio extends BaseDocument {
  patents: {
    filed: number
    granted: number
    pending: number
  }
  trademarks: number
  copyrights: number
  documentUrls: string[]
}

// Technology description sub-collection
export interface TechnologyDescription extends BaseDocument {
  description: string
  readinessLevel: number
  innovationScore: number
  sectors: string[]
  documentUrls: string[]
}

// Projections sub-collection
export interface Projection extends BaseDocument {
  year: number
  revenue: number
  employeeCount: number
  marketShare: number
  documentUrls: string[]
}

// Complete form data structure
export interface CompanyFormData {
  // Main company document
  company: CompanyInformation
  
  // Sub-collections
  companies_financials: FinancialInformation[]
  companies_personnel: PersonnelInformation
  companies_contacts: ContactInformation
  companies_ipPortfolio: IpPortfolio
  companies_technology: TechnologyDescription
  companies_projections: Projection[]
}

// Form submission response
export interface CompanyFormResponse {
  success: boolean
  companyId?: string
  error?: string
}