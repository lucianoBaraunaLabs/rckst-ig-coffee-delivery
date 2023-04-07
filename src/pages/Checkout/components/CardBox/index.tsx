import { ReactNode } from 'react'
import * as S from './styles'

interface CardBoxProps extends S.WrapPropsStyle {
  tag?: 'div'
  children: ReactNode
  borderVariation?: 'card'
}

export function CardBox(props: CardBoxProps) {
  const { children, tag } = props
  return (
    <S.Wrap as={tag} {...props}>
      {children}
    </S.Wrap>
  )
}
