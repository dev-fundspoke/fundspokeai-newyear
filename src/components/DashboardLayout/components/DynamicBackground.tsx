import { Box, keyframes, styled } from '@mui/material'

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const floatAnimation = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) }
  50% { transform: translate(10px, 15px) rotate(5deg) }
  100% { transform: translate(0, 0) rotate(0deg) }
`

const BackgroundContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
})

const GradientLayer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(-45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 15s ease infinite`,
  opacity: 0.1,
}))

const GeometricOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '200%',
  height: '200%',
  transform: 'translate(-50%, -50%)',
  background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(theme.palette.background.default)}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30zm15 0c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
  opacity: 0.4,
  animation: `${floatAnimation} 20s linear infinite`,
}))

export function DynamicBackground() {
  return (
    <BackgroundContainer>
      <GradientLayer />
      <GeometricOverlay />
    </BackgroundContainer>
  )
}