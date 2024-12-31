export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 8)
  const extension = originalName.split('.').pop()
  return `${timestamp}-${randomString}.${extension}`
}

export function getStoragePath(companyId: string, category: string, fileName: string): string {
  return `companies/${companyId}/${category}/${fileName}`
}