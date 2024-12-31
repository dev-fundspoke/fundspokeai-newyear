import { motion } from 'framer-motion'
import { Box, styled } from '@mui/material'

const IconContainer = styled(Box)(({ theme }) => ({
  color: '#6495ED',
  marginBottom: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > svg': {
    fontSize: 32,
  },
}))

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2
      }
    }
  }
}

export function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <IconContainer>
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        {children}
      </motion.div>
    </IconContainer>
  )
}