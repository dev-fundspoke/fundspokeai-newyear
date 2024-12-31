import { useFileUpload } from './useFileUpload'

export function useFinancialUpload(companyId: string) {
  return useFileUpload(`companies/${companyId}/financialStatements`)
}