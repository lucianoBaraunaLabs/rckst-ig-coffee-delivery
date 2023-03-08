import { ReactNode } from 'react'
import * as S from './styles'

interface TitleSectionProps {
  children: ReactNode
}

export function TitleSection({ children }: TitleSectionProps) {
  return <S.Title>{children}</S.Title>
}
