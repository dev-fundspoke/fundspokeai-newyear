import { useState } from 'react'
import { uploadService } from '../services/storage/uploadService'
import { StorageError } from '../services/storage/types'
import { STORAGE_CATEGORIES } from '../services/storage/constants'

interface UseCompanyLogoResult {
  uploadLogo: (file: File) => Promise<string>
  isUploading: boolean
  error: StorageError | null
  progress: number | null
}

export function useCompanyLogo(): UseCompanyLogoResult {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<StorageError | null>(null)
  const [progress, setProgress] = useState<number | null>(null)

  const uploadLogo = async (file: File): Promise<string> => {
    try {
      setIsUploading(true)
      setError(null)
      setProgress(0)

      const result = await uploadService.uploadFile(file, {
        companyId: 'temp',
        category: STORAGE_CATEGORIES.LOGOS,
        onProgress: setProgress
      })

      return result.url
    } catch (err) {
      const uploadError = err as StorageError
      setError(uploadError)
      throw uploadError
    } finally {
      setIsUploading(false)
      setProgress(null)
    }
  }

  return {
    uploadLogo,
    isUploading,
    error,
    progress
  }
}