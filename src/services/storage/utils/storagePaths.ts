import { STORAGE_CATEGORIES, STORAGE_PATHS } from '../constants'

export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 8)
  const extension = originalName.split('.').pop()
  return `${timestamp}-${randomString}.${extension}`
}

export function getCompanyStoragePath(
  companyId: string,
  category: keyof typeof STORAGE_CATEGORIES,
  fileName: string
): string {
  if (category === STORAGE_CATEGORIES.LOGOS) {
    return `${STORAGE_PATHS.COMPANY_LOGOS(companyId)}/${fileName}`
  }
  return `companies/${companyId}/${category}/${fileName}`
}

export function parseStorageUrl(url: string): string {
  try {
    const decodedUrl = decodeURIComponent(url)
    const pathMatch = decodedUrl.match(/o\/(.+?)\?/)
    return pathMatch ? pathMatch[1] : url
  } catch {
    return url
  }
}