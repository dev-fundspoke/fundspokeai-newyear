import * as Yup from 'yup'

const contactInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9-+()]*$/, 'Invalid phone number format')
})

export const teamMemberSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  role: Yup.string()
    .required('Role is required'),
  contactInfo: contactInfoSchema,
  linkedInProfile: Yup.string()
    .url('Must be a valid URL'),
  notes: Yup.string()
})

export const addressSchema = Yup.object().shape({
  type: Yup.string()
    .required('Address type is required')
    .oneOf(['Business', 'Legal/Mailing']),
  line1: Yup.string()
    .required('Address line 1 is required'),
  line2: Yup.string(),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  zipCode: Yup.string()
    .required('ZIP code is required'),
  country: Yup.string()
    .required('Country is required')
})

export const contactValidationSchema = Yup.object().shape({
  keyTeamMembers: Yup.array().of(teamMemberSchema),
  addresses: Yup.array().of(addressSchema),
  website: Yup.string().url('Must be a valid URL'),
  socialMediaLinks: Yup.array().of(
    Yup.object().shape({
      platform: Yup.string().required('Platform is required'),
      url: Yup.string().url('Must be a valid URL').required('URL is required')
    })
  )
})