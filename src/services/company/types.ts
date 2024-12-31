import { Timestamp } from 'firebase/firestore'

// Base document interfaces
interface BaseDocument {
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Sub-collection interfaces
export interface CompanyAddress extends BaseDocument {
  type: 'business' | 'legal' | 'mailing'
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface CompanyFinancial extends BaseDocument {
  year: number
  revenue: number
  profit: number
  cashFlow: number
  employeeCount: number
}

export interface CompanyPersonnel extends BaseDocument {
  totalEmployees: number
  fullTimeEmployees: number
  partTimeEmployees: number
  contractEmployees: number
  demographics: {
    women: number
    minorities: number
    veterans: number
  }
}

export interface CompanyContact extends BaseDocument {
  name: string
  title: string
  email: string
  phone: string
  isPrimary: boolean
}

export interface CompanyIpPortfolio extends BaseDocument {
  patents: {
    filed: number
    granted: number
    pending: number
  }
  trademarks: number
  copyrights: number
}

export interface CompanyTechnology extends BaseDocument {
  description: string
  readinessLevel: number
  innovationScore: number
  sectors: string[]
}

export interface CompanyProjection extends BaseDocument {
  year: number
  revenue: number
  employeeCount: number
  marketShare: number
}

// Main company document interface
export interface Company extends BaseDocument {
  id: string
  name: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  organizationType: string
  sector: string[]
  incorporationDate: Timestamp | null
}

export interface CompanyCreateResponse {
  success: boolean
  companyId?: string
  error?: string
}