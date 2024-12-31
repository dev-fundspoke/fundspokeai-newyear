import { Button, CircularProgress, Box, Typography } from '@mui/material'
import { useFileUpload } from '../../hooks/useFileUpload'

interface FileUploadProps {
  onUploadComplete: (url: string) => void
  accept?: string
  maxSize?: number
}

export function FileUpload({ 
  onUploadComplete, 
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024 // 5MB default
}: FileUploadProps) {
  const { isUploading, progress, error, uploadFile } = useFileUpload()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.size > maxSize) {
      alert(`File size must be less than ${maxSize / 1024 / 1024}MB`)
      return
    }

    try {
      const result = await uploadFile(file)
      onUploadComplete(result.url)
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <Box>
      <input
        accept={accept}
        style={{ display: 'none' }}
        id="file-upload-input"
        type="file"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      <label htmlFor="file-upload-input">
        <Button
          variant="contained"
          component="span"
          disabled={isUploading}
          fullWidth
          sx={{
            backgroundColor: '#5D9B9B',
            '&:hover': {
              backgroundColor: '#33B0B0',
            }
          }}
        >
          {isUploading ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              {progress ? `${Math.round(progress.progress)}%` : 'Uploading...'}
            </>
          ) : (
            'Upload File'
          )}
        </Button>
      </label>
      {error && (
        <Typography color="error" variant="caption" sx={{ mt: 1 }}>
          Upload failed: {error.message}
        </Typography>
      )}
    </Box>
  )
}