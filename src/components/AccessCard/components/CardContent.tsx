import { CardContent as MuiCardContent, styled } from '@mui/material'

export const StyledCardContent = styled(MuiCardContent)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  // Remove transform transition since it's handled by framer-motion
}))