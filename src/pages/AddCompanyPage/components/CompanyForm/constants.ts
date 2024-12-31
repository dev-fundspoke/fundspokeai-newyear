export const organizationTypes = [
  'For Profit',
  'Non Profit',
  'Cooperative',
  'Partnership',
  'Sole Proprietorship'
] as const

export const sectors = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Other'
] as const

export type OrganizationType = typeof organizationTypes[number]
export type Sector = typeof sectors[number]