import { ReactNode, useState } from 'react'
import { ButtonSelectContainer } from './styles'

interface ButtonSelectProps {
  children: ReactNode
  onSelectButton: (selected: boolean) => void
}

export function ButtonSelect({ children, onSelectButton }: ButtonSelectProps) {
  const [selected, setSelected] = useState(false)
  const hasSelectedClass = selected ? 'selected' : ''

  function handleSelectClick() {
    setSelected(!selected)
    onSelectButton(!selected)
  }

  return (
    <ButtonSelectContainer
      onClick={handleSelectClick}
      isSelected={selected}
      className={hasSelectedClass}
    >
      {children}
    </ButtonSelectContainer>
  )
}
