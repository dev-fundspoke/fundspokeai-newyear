import { useCallback } from 'react'
import { FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { CompanyFormValues } from '../types/company'
import { companyService } from '../services/company/companyService'
import { AppError } from '../utils/errorHandling'

export function useCompanyForm() {
  const navigate = useNavigate()

  const handleSubmit = useCallback(async (
    values: CompanyFormValues,
    helpers: FormikHelpers<CompanyFormValues>
  ) => {
    try {
      helpers.setSubmitting(true)
      helpers.setStatus(null)

      if (!values.logoFile) {
        throw new AppError('Company logo is required', 'VALIDATION_ERROR')
      }

      const response = await companyService.createCompanyWithLogo(
        {
          companyName: values.companyName,
          corporationNumber: values.corporationNumber,
          federalBusinessRegistryNumber: values.federalBusinessRegistryNumber,
          organizationType: values.organizationType,
          sector: values.sector,
          incorporationDate: values.incorporationDate,
          customerSatisfactionScore: values.customerSatisfactionScore,
          grantMatchScore: values.grantMatchScore,
          innovationScore: values.innovationScore,
          queryPerformanceScore: values.queryPerformanceScore,
          totalEmployeeCount: values.totalEmployeeCount
        },
        values.logoFile
      )

      if (response.success && response.companyId) {
        navigate(`/companies/${response.companyId}`)
      } else {
        throw new AppError('Failed to create company', 'COMPANY_CREATE_ERROR')
      }
    } catch (error) {
      const appError = error instanceof AppError ? error : new AppError(
        'An unexpected error occurred',
        'UNKNOWN_ERROR',
        error
      )
      
      console.error('Error creating company:', appError)
      helpers.setStatus({ 
        error: appError.message
      })
    } finally {
      helpers.setSubmitting(false)
    }
  }, [navigate])

  return { handleSubmit }
}