import { useContext } from 'react'
import { Card } from '~/components/Card'
import { CoffeeContext } from '~/contexts/CoffeeContext'
import * as S from './styles'
import { helperFormatCurrencyBRL } from '~/utils'
import { useNavigate } from 'react-router-dom'
import { TitleSection } from '~/pages/Checkout/components/TitleSection'
import { CardBox } from '~/pages/Checkout/components/CardBox'

export function CoffeSelected() {
  const { cart, order } = useContext(CoffeeContext)
  const hasCartItems = cart.items.length > 0
  const totalDelivery = helperFormatCurrencyBRL(
    cart.priceTotal + order.deliverValue,
  )
  const navigate = useNavigate()

  function handleToHome() {
    navigate('/')
  }

  return (
    <aside>
      <header>
        <TitleSection>Cafés selecionados</TitleSection>
      </header>

      <CardBox tag="div" borderVariation="card">
        {!hasCartItems && <S.Message>Escolha algum Café :-)</S.Message>}

        {hasCartItems && (
          <S.CheckoutListCard>
            {cart.items.map((item, index) => (
              <S.ListCardItem key={`checkout-listcard-${index}`}>
                <Card
                  coffee={item}
                  key={`checkout-${index}-${item.id}`}
                  variation="row"
                />
              </S.ListCardItem>
            ))}
          </S.CheckoutListCard>
        )}

        <S.CheckoutListTotal>
          <li>
            <S.ListTotalItem>
              Total de itens <span>{cart.quantityOfItems}</span>
            </S.ListTotalItem>
          </li>
          <li>
            <S.ListTotalItem>
              Entrega <span>{helperFormatCurrencyBRL(order.deliverValue)}</span>
            </S.ListTotalItem>
          </li>
          <li>
            <S.ListTotalItem big>
              Total <span>{totalDelivery}</span>
            </S.ListTotalItem>
          </li>
        </S.CheckoutListTotal>
        {hasCartItems ? (
          <S.ButtonConfirm type="submit">CONFIRMAR PEDIDO</S.ButtonConfirm>
        ) : (
          <S.ButtonConfirm onClick={handleToHome}>
            ESCOLHER CAFÉS
          </S.ButtonConfirm>
        )}
      </CardBox>
    </aside>
  )
}
