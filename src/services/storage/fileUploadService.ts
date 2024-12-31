import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../config/firebase'
import { StorageError } from './types'

export const STORAGE_PATHS = {
  DEBT_DOCUMENTS: 'debtDocuments',
  FINANCIAL_STATEMENTS: 'financialStatements',
  GROWTH_PLANS: 'growthPlansDocuments',
  INVESTMENT_DOCUMENTS: 'investmentDocuments',
  IP_PORTFOLIO: 'ipPortfolioDocuments',
  LOGOS: 'logos',
  RESUMES: {
    KEY_CONTACTS: 'resumes/keyContacts',
    SECONDARY_CONTACT: 'resumes/secondaryContact'
  },
  TECHNOLOGY: 'technologyDocuments'
} as const

class FileUploadService {
  private static instance: FileUploadService

  private constructor() {}

  static getInstance(): FileUploadService {
    if (!FileUploadService.instance) {
      FileUploadService.instance = new FileUploadService()
    }
    return FileUploadService.instance
  }

  private getStoragePath(companyId: string, category: keyof typeof STORAGE_PATHS, fileName: string): string {
    const basePath = `companies/${companyId}`
    const categoryPath = STORAGE_PATHS[category]
    return `${basePath}/${categoryPath}/${fileName}`
  }

  private getResumeStoragePath(
    companyId: string, 
    contactId: string | null = null
  ): string {
    const basePath = `companies/${companyId}`
    return contactId 
      ? `${basePath}/${STORAGE_PATHS.RESUMES.KEY_CONTACTS}/${contactId}`
      : `${basePath}/${STORAGE_PATHS.RESUMES.SECONDARY_CONTACT}`
  }

  async uploadFile(
    file: File,
    companyId: string,
    category: keyof typeof STORAGE_PATHS,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      const timestamp = Date.now()
      const fileName = `${timestamp}_${file.name}`
      const path = this.getStoragePath(companyId, category, fileName)
      const storageRef = ref(storage, path)
      
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            onProgress?.(progress)
          },
          (error) => {
            const storageError = new Error('Upload failed') as StorageError
            storageError.code = error.code
            reject(storageError)
          },
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
              resolve(downloadUrl)
            } catch (error) {
              reject(error)
            }
          }
        )
      })
    } catch (error) {
      console.error('File upload error:', error)
      throw error
    }
  }

  async uploadResume(
    file: File,
    companyId: string,
    contactId?: string,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      const timestamp = Date.now()
      const fileName = `${timestamp}_${file.name}`
      const path = this.getResumeStoragePath(companyId, contactId || null)
      const storageRef = ref(storage, `${path}/${fileName}`)
      
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            onProgress?.(progress)
          },
          (error) => {
            const storageError = new Error('Resume upload failed') as StorageError
            storageError.code = error.code
            reject(storageError)
          },
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
              resolve(downloadUrl)
            } catch (error) {
              reject(error)
            }
          }
        )
      })
    } catch (error) {
      console.error('Resume upload error:', error)
      throw error
    }
  }
}

export const fileUploadService = FileUploadService.getInstance()