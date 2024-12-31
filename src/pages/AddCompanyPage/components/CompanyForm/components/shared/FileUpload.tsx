import { Box, Typography } from '@mui/material'
import { DragDropUpload } from '../../../../../../../components/DragDropUpload/DragDropUpload'
import { useFileUpload } from '../../../../../../../hooks/useFileUpload'

interface FileUploadProps {
  label: string
  accept?: string
  maxSize?: number
  currentFile?: string
  helperText?: string
  onUploadComplete: (url: string) => void
}

export function FileUpload({
  label,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024,
  currentFile,
  helperText,
  onUploadComplete
}: FileUploadProps) {
  const { uploadFile, isUploading } = useFileUpload()

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadFile(file, 'temp-company-id', 'LOGOS')
      onUploadComplete(url)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom required>
        {label}
      </Typography>
      
      <DragDropUpload
        onFileSelect={handleFileSelect}
        accept={accept}
        maxSize={maxSize}
        disabled={isUploading}
      />
      
      {helperText && (
        <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
          {helperText}
        </Typography>
      )}
      
      {currentFile && (
        <Box sx={{ mt: 2 }}>
          <img 
            src={currentFile} 
            alt="Preview" 
            style={{ 
              maxWidth: '200px', 
              maxHeight: '200px',
              objectFit: 'contain'
            }} 
          />
        </Box>
      )}
    </Box>
  )
}