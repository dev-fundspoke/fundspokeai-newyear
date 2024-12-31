import * as Yup from 'yup'

export const baseValidationSchema = {
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),
    
  description: Yup.string()
    .max(500, 'Description must not exceed 500 characters')
    .trim(),
    
  createdAt: Yup.date(),
  updatedAt: Yup.date()
}