import * as Yup from 'yup'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const SUPPORTED_FORMATS = {
  image: ['image/jpeg', 'image/png', 'image/gif'],
  document: ['.pdf', '.doc', '.docx'],
  any: ['*/*']
}

export const createFileValidation = (
  maxSize = MAX_FILE_SIZE,
  formats: keyof typeof SUPPORTED_FORMATS = 'any'
) => {
  return Yup.mixed()
    .test('fileSize', `File size must be less than ${maxSize / 1024 / 1024}MB`, (value) => {
      if (!value) return true
      return value instanceof File && value.size <= maxSize
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value) return true
      if (formats === 'any') return true
      return value instanceof File && SUPPORTED_FORMATS[formats].includes(value.type)
    })
}