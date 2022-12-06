import { ReactNode } from 'react'
import { ButtonContainer, ButtonPropsStyles } from './styles'

interface ButtonProps extends ButtonPropsStyles {
  children: ReactNode
}

export function Button({ children, variation, ...props }: ButtonProps) {
  return (
    <ButtonContainer variation={variation} {...props}>
      {children}
    </ButtonContainer>
  )
}
