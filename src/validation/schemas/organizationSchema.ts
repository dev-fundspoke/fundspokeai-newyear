import * as Yup from 'yup'

const ORGANIZATION_TYPES = [
  'For Profit',
  'Non Profit',
  'Cooperative',
  'Partnership',
  'Sole Proprietorship',
  'Crown Corporation',
  'Other'
] as const

export const organizationSchema = Yup.object().shape({
  organizationType: Yup.string()
    .required('Organization type is required')
    .oneOf(ORGANIZATION_TYPES, 'Invalid organization type'),
  
  sector: Yup.array()
    .of(Yup.string())
    .required('At least one sector must be selected')
    .min(1, 'Select at least one sector')
})