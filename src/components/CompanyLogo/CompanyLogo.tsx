import { Box, Typography } from '@mui/material'
import { DragDropUpload } from '../DragDropUpload/DragDropUpload'
import { useCompanyLogo } from '../../hooks/useCompanyLogo'
import { FILE_CONSTRAINTS } from '../../services/storage/constants'

interface CompanyLogoProps {
  value?: string
  onChange: (url: string) => void
  error?: string
}

export function CompanyLogo({ value, onChange, error }: CompanyLogoProps) {
  const { uploadLogo, isUploading, progress } = useCompanyLogo()

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadLogo(file)
      onChange(url)
    } catch (error) {
      console.error('Logo upload failed:', error)
    }
  }

  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Company Logo <Typography component="span" color="error">*</Typography>
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: value ? '1fr 1fr' : '1fr',
        gap: 2
      }}>
        <Box>
          <DragDropUpload
            onFileSelect={handleFileSelect}
            accept={FILE_CONSTRAINTS.ACCEPTED_IMAGE_TYPES.join(',')}
            maxSize={FILE_CONSTRAINTS.MAX_FILE_SIZE}
            disabled={isUploading}
            progress={progress}
          />
          
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
            Accepted formats: PNG, JPG (max 5MB)
          </Typography>

          {error && (
            <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
              {error}
            </Typography>
          )}
        </Box>

        {value && (
          <Box 
            sx={{ 
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              bgcolor: 'background.paper'
            }}
          >
            <img 
              src={value} 
              alt="Company Logo Preview" 
              style={{ 
                maxWidth: '100%',
                maxHeight: '200px',
                objectFit: 'contain'
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}