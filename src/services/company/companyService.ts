import { collection, doc, writeBatch, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { Company, CompanyCreateResponse } from './types'
import { uploadService } from '../storage/uploadService'
import { AppError } from '../../utils/errorHandling'
import { STORAGE_CATEGORIES } from '../storage/constants'

class CompanyService {
  private static instance: CompanyService
  private readonly collectionName = 'companies'
  
  private constructor() {}

  static getInstance(): CompanyService {
    if (!CompanyService.instance) {
      CompanyService.instance = new CompanyService()
    }
    return CompanyService.instance
  }

  async createCompanyWithLogo(data: Partial<Company>, logoFile: File): Promise<CompanyCreateResponse> {
    const batch = writeBatch(db)
    const companyRef = doc(collection(db, this.collectionName))
    const companyId = companyRef.id

    try {
      // Upload logo first with correct category
      const result = await uploadService.uploadFile(logoFile, {
        companyId,
        category: STORAGE_CATEGORIES.LOGOS,
        onProgress: undefined
      })

      const now = Timestamp.now()
      const companyData: Company = {
        id: companyId,
        companyName: data.companyName!,
        corporationNumber: data.corporationNumber!,
        federalBusinessRegistryNumber: data.federalBusinessRegistryNumber!,
        organizationType: data.organizationType!,
        sector: data.sector!,
        incorporationDate: data.incorporationDate ? Timestamp.fromDate(data.incorporationDate) : null,
        companyLogo: result.url,
        customerSatisfactionScore: data.customerSatisfactionScore || 0,
        grantMatchScore: data.grantMatchScore || 0,
        innovationScore: data.innovationScore || 0,
        queryPerformanceScore: data.queryPerformanceScore || 0,
        totalEmployeeCount: data.totalEmployeeCount || 0,
        createdAt: now,
        updatedAt: now
      }

      batch.set(companyRef, companyData)
      await batch.commit()

      return { success: true, companyId }
    } catch (error) {
      console.error('Error creating company:', error)
      throw new AppError(
        'Failed to create company. Please try again.',
        'COMPANY_CREATE_ERROR',
        error
      )
    }
  }
}

export const companyService = CompanyService.getInstance()