import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../config/firebase'
import { StorageError, UploadResult, UploadOptions } from './types'
import { generateUniqueFileName, getCompanyStoragePath } from './utils/storagePaths'
import { validateImageUpload } from './validation'
import { AppError } from '../../utils/errorHandling'
import { STORAGE_CATEGORIES } from './constants'

class UploadService {
  private static instance: UploadService

  private constructor() {}

  static getInstance(): UploadService {
    if (!UploadService.instance) {
      UploadService.instance = new UploadService()
    }
    return UploadService.instance
  }

  async uploadFile(file: File, options: UploadOptions): Promise<UploadResult> {
    try {
      // Validate file if it's an image
      if (options.category === STORAGE_CATEGORIES.LOGOS) {
        const validationError = validateImageUpload(file)
        if (validationError) {
          throw new AppError(validationError.message, 'VALIDATION_ERROR')
        }
      }

      const fileName = generateUniqueFileName(file.name)
      const path = getCompanyStoragePath(
        options.companyId, 
        options.category as keyof typeof STORAGE_CATEGORIES,
        fileName
      )
      const storageRef = ref(storage, path)

      return new Promise((resolve, reject) => {
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            options.onProgress?.(progress)
          },
          (error) => {
            reject(new AppError('Upload failed', 'UPLOAD_ERROR', error))
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref)
              resolve({ url, path, fileName })
            } catch (error) {
              reject(new AppError('Failed to get download URL', 'URL_ERROR', error))
            }
          }
        )
      })
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError('File upload failed', 'UPLOAD_ERROR', error)
    }
  }
}

export const uploadService = UploadService.getInstance()