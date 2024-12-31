import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'

interface Option {
  value: string
  label: string
}

interface SelectFieldProps extends Omit<SelectProps, 'options'> {
  label: string
  options: readonly string[] | Option[]
  required?: boolean
}

export function SelectField({ 
  label, 
  options, 
  required = false,
  ...props 
}: SelectFieldProps) {
  return (
    <FormControl fullWidth required={required}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        {...props}
      >
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label
          
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}