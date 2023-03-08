import * as S from './styles'
import { CoffeSelected } from './components/CoffeSelected'
import { OrderSideBar } from './components/OrderSideBar'

export function Checkout() {
  return (
    <S.CheckoutContainer className="container">
      <CoffeSelected />
      <OrderSideBar />
    </S.CheckoutContainer>
  )
}
