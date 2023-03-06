import { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends S.ButtonPropsStyles {
  children: ReactNode
}

export function Button({ children, variation, ...props }: ButtonProps) {
  return (
    <S.ButtonContainer variation={variation} {...props}>
      {children}
    </S.ButtonContainer>
  )
}
