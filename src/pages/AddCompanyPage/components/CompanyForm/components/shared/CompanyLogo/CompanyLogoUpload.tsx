import { Box, Typography } from '@mui/material'
import { useCompanyFormContext } from '../../../context/hooks/useCompanyFormContext'
import { DragDropUpload } from '../../../../../../../components/DragDropUpload/DragDropUpload'
import { LogoPreview } from './LogoPreview'
import { useFileUpload } from '../../../../../../../hooks/useFileUpload'

export function CompanyLogoUpload() {
  const { formik } = useCompanyFormContext()
  const { uploadFile, isUploading, progress } = useFileUpload()

  const handleFileSelect = async (file: File) => {
    try {
      // Store the file for later upload during form submission
      formik.setFieldValue('logoFile', file)
      
      // Create a temporary preview URL
      const previewUrl = URL.createObjectURL(file)
      formik.setFieldValue('companyLogo', previewUrl)
    } catch (error) {
      console.error('Error handling logo:', error)
      formik.setFieldError('companyLogo', 'Failed to process logo')
    }
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Company Logo <Typography component="span" color="error">*</Typography>
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: formik.values.companyLogo ? '1fr 1fr' : '1fr',
        gap: 2,
        alignItems: 'start'
      }}>
        <Box>
          <DragDropUpload
            onFileSelect={handleFileSelect}
            accept="image/png,image/jpeg"
            maxSize={5 * 1024 * 1024}
            disabled={isUploading}
            progress={progress}
          />
          
          {formik.touched.companyLogo && formik.errors.companyLogo && (
            <Typography 
              variant="caption" 
              color="error" 
              sx={{ mt: 1, display: 'block' }}
            >
              {formik.errors.companyLogo}
            </Typography>
          )}
          
          <Typography 
            variant="caption" 
            color="textSecondary" 
            sx={{ mt: 1, display: 'block' }}
          >
            Accepted formats: PNG, JPG (max 5MB)
          </Typography>
        </Box>
        
        {formik.values.companyLogo && (
          <LogoPreview url={formik.values.companyLogo} />
        )}
      </Box>
    </Box>
  )
}