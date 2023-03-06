import * as S from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputQuantityProps {
  onDecrement: () => void
  onIncrement: () => void
  quantity: number
}

export function InputQuantity({
  onDecrement,
  onIncrement,
  quantity,
}: InputQuantityProps) {
  return (
    <S.WrapIcrement>
      <button onClick={onDecrement} disabled={quantity <= 1}>
        <Minus />
      </button>
      <input type="number" name="quantity" value={quantity} readOnly />
      <button onClick={onIncrement}>
        <Plus />
      </button>
    </S.WrapIcrement>
  )
}
