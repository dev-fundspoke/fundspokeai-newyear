import { Box, Paper, Typography } from '@mui/material'

interface LogoPreviewProps {
  url: string
}

export function LogoPreview({ url }: LogoPreviewProps) {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Typography variant="subtitle2" color="textSecondary">
        Logo Preview
      </Typography>
      
      <Box 
        sx={{ 
          width: '100%',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: 1,
          bgcolor: 'background.paper'
        }}
      >
        <img 
          src={url} 
          alt="Company Logo Preview" 
          style={{ 
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
          onError={(e) => {
            // Handle broken image
            const img = e.target as HTMLImageElement
            img.style.display = 'none'
            img.parentElement!.innerHTML = 'Failed to load image'
          }}
        />
      </Box>
    </Paper>
  )
}