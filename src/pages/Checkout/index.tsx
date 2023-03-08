import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Card } from '../../components/Card'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import * as S from './styles'
import { helperFormatCurrencyBRL } from '../../utils'

export function Checkout() {
  const { cartItems, infoCart, deliverValue } = useContext(CoffeeContext)
  const theme = useTheme()
  const navigate = useNavigate()
  const totalDelivery = helperFormatCurrencyBRL(infoCart.total + deliverValue)
  const hasCartItems = cartItems.length > 0

  function handleToSuccess() {
    navigate('/success')
  }

  function handleToHome() {
    navigate('/')
  }

  return (
    <S.CheckoutContainer className="container">
      <aside>
        <header>
          <S.CheckoutAreaTitle>Cafés selecionados</S.CheckoutAreaTitle>
        </header>
        <S.CheckoutCard as="div" borderVariation="card">
          {!hasCartItems && <S.Message>Escolha algum Café :-)</S.Message>}

          {hasCartItems && (
            <S.CheckoutListCard>
              {cartItems.map((item, index) => (
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
                Total de itens <span>{infoCart.quantity}</span>
              </S.ListTotalItem>
            </li>
            <li>
              <S.ListTotalItem>
                Entrega <span>{helperFormatCurrencyBRL(deliverValue)}</span>
              </S.ListTotalItem>
            </li>
            <li>
              <S.ListTotalItem big>
                Total <span>{totalDelivery}</span>
              </S.ListTotalItem>
            </li>
          </S.CheckoutListTotal>
          {hasCartItems ? (
            <S.ButtonConfirm onClick={handleToSuccess}>
              CONFIRMAR PEDIDO{' '}
            </S.ButtonConfirm>
          ) : (
            <S.ButtonConfirm onClick={handleToHome}>
              ESCOLHER CAFÉS
            </S.ButtonConfirm>
          )}
        </S.CheckoutCard>
      </aside>

      <section>
        <header>
          <S.CheckoutAreaTitle>Complete seu pedido</S.CheckoutAreaTitle>
        </header>

        <S.CheckoutCompleteOrderFilds>
          <S.CheckoutCard>
            <S.CheckoutCardHeader>
              <MapPinLine color={theme.palette['yellow-900']} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </S.CheckoutCardHeader>
            <S.CheckoutInput>
              <input type="text" id="nome" placeholder="dadad" />
              <label htmlFor="nome">Nome</label>
            </S.CheckoutInput>{' '}
            <S.CheckoutInput>
              <input type="text" id="teste1" placeholder="dada" />
              <label htmlFor="teste1">teste1</label>
              <span>Opcional</span>
            </S.CheckoutInput>
            <S.CheckoutInput>
              <input
                type="text"
                id="teste2"
                value="Jujuba"
                placeholder="dadad"
              />
              <label htmlFor="teste2">teste2</label>
              <span>Opcional</span>
            </S.CheckoutInput>
          </S.CheckoutCard>

          <S.CheckoutCard>
            <S.CheckoutCardHeader>
              <CurrencyDollar color={theme.palette['purple-500']} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </S.CheckoutCardHeader>
            <S.CheckoutListTypePayment>
              <S.ButtonPaymentType>
                <input type="radio" name="typePayment" id="creditCard" />
                <label htmlFor="creditCard">
                  <CreditCard color="#8641be" />
                  CARTÃO DE CRÉDITO
                </label>
              </S.ButtonPaymentType>
              <S.ButtonPaymentType>
                <input type="radio" name="typePayment" id="debitCard" />
                <label htmlFor="debitCard">
                  <Bank color="#8641be" />
                  CARTÃO DE DÉBITO
                </label>
              </S.ButtonPaymentType>

              <S.ButtonPaymentType>
                <input type="radio" name="typePayment" id="money" />
                <label htmlFor="money">
                  <Money color="#8641be" />
                  DINHEIRO
                </label>
              </S.ButtonPaymentType>
            </S.CheckoutListTypePayment>
          </S.CheckoutCard>
        </S.CheckoutCompleteOrderFilds>
      </section>
    </S.CheckoutContainer>
  )
}
