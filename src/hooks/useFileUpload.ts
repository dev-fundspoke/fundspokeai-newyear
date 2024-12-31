import { useState } from 'react'
import { uploadService } from '../services/storage/uploadService'
import { StorageError, UploadProgress, UploadResult } from '../services/storage/types'

interface UseFileUploadResult {
  uploadFile: (file: File, companyId: string, category: string) => Promise<UploadResult>
  progress: number | null
  error: StorageError | null
  isUploading: boolean
}

export function useFileUpload(): UseFileUploadResult {
  const [progress, setProgress] = useState<number | null>(null)
  const [error, setError] = useState<StorageError | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const uploadFile = async (
    file: File,
    companyId: string,
    category: string
  ): Promise<UploadResult> => {
    setIsUploading(true)
    setError(null)
    setProgress(0)

    try {
      const result = await uploadService.uploadFile(file, {
        companyId,
        category,
        onProgress: setProgress
      })
      return result
    } catch (error) {
      const storageError = error as StorageError
      setError(storageError)
      throw storageError
    } finally {
      setIsUploading(false)
      setProgress(null)
    }
  }

  return {
    uploadFile,
    progress,
    error,
    isUploading
  }
}