import { FILE_CONSTRAINTS } from './constants'
import { ValidationError } from '../types'

export function validateImageUpload(file: File): ValidationError | null {
  if (!file) {
    return { code: 'invalid_file', message: 'No file provided' }
  }

  if (file.size > FILE_CONSTRAINTS.MAX_FILE_SIZE) {
    return { 
      code: 'file_too_large',
      message: `File size must be less than ${FILE_CONSTRAINTS.MAX_FILE_SIZE / 1024 / 1024}MB`
    }
  }

  if (!FILE_CONSTRAINTS.ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return {
      code: 'invalid_file_type',
      message: 'File must be a JPG or PNG image'
    }
  }

  return null
}