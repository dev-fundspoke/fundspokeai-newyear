import * as Yup from 'yup'

export const employeeCountValidationSchema = Yup.object().shape({
  quarterYear: Yup.string()
    .required('Quarter and year is required')
    .matches(
      /^Q[1-4]-\d{4}$/,
      'Must be in format Q1-2024'
    )
    .test(
      'valid-year',
      'Year must be between 2000 and current year',
      (value) => {
        if (!value) return false
        const year = parseInt(value.split('-')[1])
        const currentYear = new Date().getFullYear()
        return year >= 2000 && year <= currentYear
      }
    ),
  fullTime: Yup.number()
    .typeError('Must be a number')
    .required('Number of full-time employees is required')
    .integer('Must be a whole number')
    .min(0, 'Must be non-negative'),
  partTime: Yup.number()
    .typeError('Must be a number')
    .required('Number of part-time employees is required')
    .integer('Must be a whole number')
    .min(0, 'Must be non-negative'),
  contract: Yup.number()
    .typeError('Must be a number')
    .required('Number of contract employees is required')
    .integer('Must be a whole number')
    .min(0, 'Must be non-negative')
})