import * as Yup from 'yup'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png']

export const fileSchema = Yup.object().shape({
  companyLogo: Yup.mixed()
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      if (!value) return true
      return value instanceof File && value.size <= MAX_FILE_SIZE
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value) return true
      return value instanceof File && SUPPORTED_IMAGE_FORMATS.includes(value.type)
    })
})