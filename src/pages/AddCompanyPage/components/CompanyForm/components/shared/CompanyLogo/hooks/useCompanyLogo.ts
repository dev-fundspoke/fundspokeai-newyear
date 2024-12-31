import { useCallback, useState } from 'react'
import { useFileUpload } from '../../../../../../../../hooks/useFileUpload'

interface UseCompanyLogoProps {
  onChange: (url: string) => void
}

export function useCompanyLogo({ onChange }: UseCompanyLogoProps) {
  const { uploadFile, isUploading } = useFileUpload()
  const [error, setError] = useState<Error | null>(null)

  const handleLogoUpload = useCallback(async (file: File) => {
    try {
      setError(null)
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file')
      }

      // Validate file size (5MB)
      const maxSize = 5 * 1024 * 1024
      if (file.size > maxSize) {
        throw new Error('File size must be less than 5MB')
      }

      // Use a temporary ID for initial upload
      // The actual companyId will be updated after company creation
      const result = await uploadFile(file, 'temp', 'logos')
      onChange(result.url)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to upload logo')
      setError(error)
      console.error('Error uploading company logo:', error)
    }
  }, [uploadFile, onChange])

  return {
    handleLogoUpload,
    isUploading,
    error
  }
}