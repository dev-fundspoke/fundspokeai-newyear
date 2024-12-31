export interface BaseDocument {
  fileId: string
  fileName: string
  documentCategory: string
  documentType: string
  createdAt: string
  updatedAt: string
}

export interface TechnologyDocument extends BaseDocument {}
export interface InvestmentDocument extends BaseDocument {
  date: string
}
export interface DebtDocument extends BaseDocument {
  date: string
}