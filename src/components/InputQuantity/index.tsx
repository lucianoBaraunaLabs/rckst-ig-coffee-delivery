import * as S from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputQuantityProps {
  onDecrement: () => void
  onIncrement: () => void
  quantity: number | undefined
}

export function InputQuantity({
  onDecrement,
  onIncrement,
  quantity,
}: InputQuantityProps) {
  const valueQuantity = quantity || 1

  return (
    <S.WrapIcrement>
      <button type="button" onClick={onDecrement} disabled={valueQuantity <= 1}>
        <Minus />
      </button>
      <input type="number" name="quantity" value={valueQuantity} readOnly />
      <button type="button" onClick={onIncrement}>
        <Plus />
      </button>
    </S.WrapIcrement>
  )
}
