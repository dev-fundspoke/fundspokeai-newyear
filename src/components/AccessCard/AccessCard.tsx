import { ReactNode } from 'react'
import { CardTitle } from './components/CardTitle'
import { IconWrapper } from './components/IconWrapper'
import { StyledCard } from './components/StyledCard'
import { StyledCardContent } from './components/CardContent'

interface AccessCardProps {
  title: string
  icon: ReactNode
  onClick: () => void
}

export function AccessCard({ title, icon, onClick }: AccessCardProps) {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardContent>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <CardTitle variant="h6">
          {title}
        </CardTitle>
      </StyledCardContent>
    </StyledCard>
  )
}