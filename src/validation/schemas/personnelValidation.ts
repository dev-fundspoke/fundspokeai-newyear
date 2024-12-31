import * as Yup from 'yup'
import { demographicValidationSchema } from './demographicValidation'
import { employeeCountValidationSchema } from './employeeCountValidation'

export const personnelValidationSchema = Yup.object().shape({
  management: demographicValidationSchema.required('Management demographics are required'),
  ownership: demographicValidationSchema.required('Ownership demographics are required'),
  employeeCount: employeeCountValidationSchema.required('Employee count information is required')
})