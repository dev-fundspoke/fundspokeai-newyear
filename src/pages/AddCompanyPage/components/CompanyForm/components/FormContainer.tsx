import { Box, Button } from '@mui/material'
import { useCompanyFormContext } from '../context/hooks/useCompanyFormContext'

interface FormContainerProps {
  children: React.ReactNode
}

export function FormContainer({ children }: FormContainerProps) {
  const { formik } = useCompanyFormContext()

  const isFormValid = () => {
    // Check if form is dirty (user has made changes)
    if (!formik.dirty) return false

    // Check required fields
    const requiredFields = [
      'companyName.en',
      'companyName.fr',
      'corporationNumber',
      'federalBusinessRegistryNumber',
      'companyLogo',
      'organizationType',
      'sector',
      'incorporationDate',
      'totalEmployeeCount',
      'customerSatisfactionScore',
      'grantMatchScore',
      'innovationScore',
      'queryPerformanceScore'
    ]

    const hasAllRequiredFields = requiredFields.every(field => {
      const value = field.split('.').reduce((obj, key) => obj?.[key], formik.values)
      return value !== undefined && value !== null && value !== ''
    })

    // Check if sector array has at least one item
    const hasSector = Array.isArray(formik.values.sector) && formik.values.sector.length > 0

    // Check if there are any validation errors
    const hasNoErrors = Object.keys(formik.errors).length === 0

    return hasAllRequiredFields && hasSector && hasNoErrors
  }

  return (
    <Box 
      sx={{ 
        p: 4,
        borderRadius: 3,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Box 
        component="form" 
        onSubmit={formik.handleSubmit} 
        noValidate
      >
        {children}
        
        <Box 
          sx={{ 
            mt: 4,
            pt: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderTop: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid() || formik.isSubmitting}
            sx={{
              alignSelf: 'flex-end',
              minWidth: 160,
              height: 48,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4
              }
            }}
          >
            {formik.isSubmitting ? 'Creating...' : 'Create Company'}
          </Button>

          {formik.status?.error && (
            <Box 
              sx={{ 
                color: 'error.main',
                bgcolor: 'error.light',
                p: 2,
                borderRadius: 1
              }}
            >
              {formik.status.error}
            </Box>
          )}

          {!isFormValid() && formik.submitCount > 0 && (
            <Box 
              sx={{ 
                color: 'error.main',
                bgcolor: 'error.light',
                p: 2,
                borderRadius: 1
              }}
            >
              Please fill in all required fields correctly before submitting.
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}