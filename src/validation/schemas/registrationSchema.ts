import * as Yup from 'yup'

export const registrationSchema = Yup.object().shape({
  corporationNumber: Yup.string()
    .required('Corporation number is required')
    .matches(/^[A-Za-z0-9-]+$/, 'Corporation number must contain only letters, numbers, and hyphens')
    .min(4, 'Corporation number must be at least 4 characters')
    .max(20, 'Corporation number must not exceed 20 characters')
    .trim(),
  
  federalBusinessRegistryNumber: Yup.number()
    .required('Federal business registry number is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
})