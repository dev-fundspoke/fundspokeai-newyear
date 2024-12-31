import * as Yup from 'yup'

export const demographicValidationSchema = Yup.object().shape({
  blackCommunities: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  indigenousPeoples: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  linguisticMinorityCommunities: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  newcomersToCanada: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  personsWithDisabilities: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  twoSLGBTQIPlus: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  visibleMinorities: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  women: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  youth: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100')
    .required('Required'),
  other: Yup.string()
})