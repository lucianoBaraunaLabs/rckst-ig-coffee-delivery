import * as S from './styles'
import { CoffeSelected } from '~/pages/Checkout/components/CoffeSelected'
import { DeliveryForm } from '~/pages/Checkout/components/DeliveryForm'

export function Checkout() {
  return (
    <S.CheckoutContainer className="container">
      <CoffeSelected />
      <DeliveryForm />
    </S.CheckoutContainer>
  )
}
