import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { DragDropUpload } from '../../../../../../components/DragDropUpload/DragDropUpload'
import { useCompanyFormContext } from '../../context/hooks/useCompanyFormContext'
import { useFileUpload } from '../../../../../../hooks/useFileUpload'
import { Document } from '../../context/types'

export function DocumentsTab() {
  const { formik } = useCompanyFormContext()
  const { uploadFile, isUploading } = useFileUpload()

  const handleFileSelect = async (file: File) => {
    try {
      // Generate a temporary ID for the document
      const tempId = `doc_${Date.now()}`
      
      // Upload the file
      const url = await uploadFile(file, 'temp-company-id', 'FINANCIAL_STATEMENTS')

      // Add the document to form state
      const newDocument: Document = {
        id: tempId,
        name: file.name,
        type: file.type,
        url
      }

      formik.setFieldValue('documents', [
        ...(formik.values.documents || []),
        newDocument
      ])
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const handleDeleteDocument = (documentId: string) => {
    const updatedDocuments = formik.values.documents.filter(
      doc => doc.id !== documentId
    )
    formik.setFieldValue('documents', updatedDocuments)
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Company Documents
      </Typography>

      <DragDropUpload
        onFileSelect={handleFileSelect}
        accept=".pdf,.doc,.docx"
        maxSize={5 * 1024 * 1024}
        disabled={isUploading}
      />

      {formik.values.documents && formik.values.documents.length > 0 && (
        <List sx={{ mt: 2 }}>
          {formik.values.documents.map((doc) => (
            <ListItem
              key={doc.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteDocument(doc.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={doc.name}
                secondary={`Type: ${doc.type}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}