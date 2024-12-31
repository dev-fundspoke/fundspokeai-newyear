import { Box, Typography, styled } from '@mui/material'
import { TooltipProps } from 'recharts'

const TooltipContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(229, 224, 220, 0.85)',
  backdropFilter: 'blur(8px)',
  borderRadius: '8px',
  padding: theme.spacing(1.5),
  border: '1px solid rgba(93, 155, 155, 0.3)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}))

const Label = styled(Typography)({
  color: '#EEEEEE',
  fontFamily: 'Roboto, Arial',
  fontSize: '0.875rem',
  fontWeight: 500,
})

const Value = styled(Typography)({
  color: '#EEEEEE',
  fontFamily: 'Roboto, Arial',
  fontSize: '0.875rem',
})

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <TooltipContainer>
      {label && <Label>{label}</Label>}
      {payload.map((entry, index) => (
        <Value key={index} sx={{ color: entry.color }}>
          {`${entry.name}: ${entry.value}`}
        </Value>
      ))}
    </TooltipContainer>
  )
}