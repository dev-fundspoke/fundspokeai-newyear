export interface StorageError extends Error {
  code: string
}

export interface UploadProgress {
  bytesTransferred: number
  totalBytes: number
  progress: number
}

export interface UploadResult {
  url: string
  path: string
  fileName: string
}

export interface UploadOptions {
  companyId: string
  category: string
  onProgress?: (progress: number) => void
}