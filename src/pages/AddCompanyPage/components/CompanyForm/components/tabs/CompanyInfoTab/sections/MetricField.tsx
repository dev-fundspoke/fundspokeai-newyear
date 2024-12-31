import { FormField } from '../../../shared/FormField'

interface MetricFieldProps {
  name: string
  label: string
  placeholder?: string
}

export function MetricField({ name, label, placeholder }: MetricFieldProps) {
  return (
    <FormField
      name={name}
      label={label}
      type="number"
      fullWidth
      placeholder={placeholder}
      inputProps={{ 
        min: 0, 
        max: 100,
        step: 1
      }}
      sx={{
        '& .MuiInputBase-input': {
          textAlign: 'center'
        }
      }}
    />
  )
}