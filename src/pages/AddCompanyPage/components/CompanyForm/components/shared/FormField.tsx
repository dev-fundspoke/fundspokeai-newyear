import { TextField, TextFieldProps } from '@mui/material'
import { useCompanyFormContext } from '../../context/hooks/useCompanyFormContext'
import { get } from 'lodash'

interface FormFieldProps extends Omit<TextFieldProps, 'error' | 'helperText' | 'value' | 'onChange'> {
  name: string
}

export function FormField({ name, ...props }: FormFieldProps) {
  const { formik } = useCompanyFormContext()

  const value = get(formik.values, name, '')
  const touched = get(formik.touched, name)
  const error = get(formik.errors, name)
  const fieldError = touched && error

  return (
    <TextField
      {...props}
      name={name}
      value={value}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(fieldError)}
      helperText={fieldError ? error : props.helperText}
      variant="outlined"
      size="medium"
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transform: 'translateY(-1px)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
            transform: 'translateY(-1px)',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)'
          }
        },
        ...props.sx
      }}
    />
  )
}