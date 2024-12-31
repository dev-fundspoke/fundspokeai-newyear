import * as Yup from 'yup'
import { companyNameSchema } from './schemas/companyNameSchema'
import { registrationSchema } from './schemas/registrationSchema'
import { organizationSchema } from './schemas/organizationSchema'
import { fileSchema } from './schemas/fileSchema'

export const companyValidationSchema = Yup.object().shape({
  ...companyNameSchema.fields,
  ...registrationSchema.fields,
  ...organizationSchema.fields,
  ...fileSchema.fields
})