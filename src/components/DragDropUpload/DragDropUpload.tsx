import { Box, Typography, CircularProgress } from '@mui/material';
import { useRef, useState } from 'react';
import { DragDropUploadProps } from './types';
import { DropZone } from './styles';

export function DragDropUpload({
  onFileSelect,
  accept = 'image/png,image/jpeg',
  maxSize = 5 * 1024 * 1024,
  disabled = false,
  progress
}: DragDropUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsOver(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): string | null => {
    const acceptedTypes = accept.split(',').map(type => type.trim());
    if (!acceptedTypes.includes(file.type)) {
      return `File type ${file.type} is not supported. Accepted types: ${acceptedTypes.join(', ')}`;
    }

    if (file.size > maxSize) {
      return `File size must be less than ${maxSize / 1024 / 1024}MB`;
    }

    return null;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setIsOver(false);
    dragCounter.current = 0;

    if (disabled) return;

    const file = e.dataTransfer.files[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      alert(error);
      return;
    }

    onFileSelect(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      alert(error);
      return;
    }

    onFileSelect(file);
  };

  return (
    <Box>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        style={{ display: 'none' }}
        disabled={disabled}
      />
      <DropZone
        isDragging={isDragging}
        isOver={isOver}
        disabled={disabled}
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {disabled ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={24} />
            {progress !== null && (
              <Typography variant="caption" color="textSecondary">
                {Math.round(progress)}%
              </Typography>
            )}
          </Box>
        ) : (
          <>
            <Typography color="textSecondary" gutterBottom>
              Drag and drop a file here, or click to select
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Supported formats: PNG, JPG
              <br />
              Maximum size: {maxSize / 1024 / 1024}MB
            </Typography>
          </>
        )}
      </DropZone>
    </Box>
  );
}