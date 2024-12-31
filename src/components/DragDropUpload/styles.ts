import { Box, styled } from '@mui/material';
import { DropZoneProps } from './types';

export const DropZone = styled(Box, {
  shouldForwardProp: (prop) => 
    prop !== 'isDragging' && 
    prop !== 'disabled' && 
    prop !== 'isOver'
})<DropZoneProps>(({ theme, isDragging, disabled, isOver }) => ({
  border: `2px dashed ${
    isOver 
      ? theme.palette.primary.main 
      : isDragging 
        ? theme.palette.secondary.main 
        : theme.palette.grey[300]
  }`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  backgroundColor: isOver 
    ? `${theme.palette.primary.main}10`
    : isDragging 
      ? `${theme.palette.secondary.main}10`
      : 'transparent',
  transition: theme.transitions.create([
    'border-color',
    'background-color'
  ], {
    duration: theme.transitions.duration.shorter
  }),
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
  minHeight: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
}));