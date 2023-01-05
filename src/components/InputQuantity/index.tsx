import { WrapIcrement } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputQuantityProps {
  onDecrement: () => void
  onIncrement: () => void
  disableDecrement: boolean
  quantity: number
}

export function InputQuantity({
  onDecrement,
  onIncrement,
  disableDecrement,
  quantity,
}: InputQuantityProps) {
  return (
    <WrapIcrement>
      <button onClick={onDecrement} disabled={disableDecrement}>
        <Minus />
      </button>
      <input type="number" id="quantity" name="quantity" value={quantity} />
      <button onClick={onIncrement}>
        <Plus />
      </button>
    </WrapIcrement>
  )
}
