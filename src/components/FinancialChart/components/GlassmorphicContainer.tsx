import { Box, keyframes, styled } from '@mui/material'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

const hover = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-5px) scale(1.02); }
  100% { transform: translateY(0) scale(1); }
`

export const GlassmorphicContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(229, 224, 220, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: '1px solid rgba(93, 155, 155, 0.5)',
  boxShadow: `
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(51, 176, 176, 0.5)
  `,
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transformOrigin: 'center center',
  transform: 'translateZ(0)',
  willChange: 'transform, box-shadow',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
    borderRadius: '12px 12px 0 0',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transform: 'translateX(-100%)',
    animation: `${shimmer} 4s infinite`,
  },

  '&:hover': {
    transform: 'translateZ(50px) scale(1.05)',
    boxShadow: `
      0 20px 30px rgba(0, 0, 0, 0.25),
      0 10px 20px rgba(0, 0, 0, 0.15),
      inset 0 0 0 1px rgba(51, 176, 176, 0.6),
      0 0 20px rgba(0, 255, 255, 0.5)
    `,
    animation: `${hover} 2s ease-in-out infinite`,
    cursor: 'pointer',
    
    '& .recharts-surface': {
      transform: 'scale(1.02)',
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
}))