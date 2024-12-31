export function getCompanyLogoPath(fileName: string): string {
  const timestamp = Date.now()
  const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.]/g, '_')
  return `companies/{companyId}/logos/${timestamp}_${sanitizedFileName}`
}