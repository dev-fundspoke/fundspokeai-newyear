export interface DragDropUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
  progress?: number | null;
}

export interface DropZoneProps {
  isDragging: boolean;
  disabled: boolean;
  isOver: boolean;
}