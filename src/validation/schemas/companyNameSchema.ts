import * as Yup from 'yup'

export const companyNameSchema = Yup.object().shape({
  en: Yup.string()
    .required('English company name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),
  fr: Yup.string()
    .required('French company name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim()
})