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
import { ButtonSelect } from '../../components/ButtonSelect'
import { Card } from '../../components/Card'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import {
  CheckoutAreaTitle,
  CheckoutCard,
  CheckoutCardHeader,
  CheckoutCompleteOrderFilds,
  CheckoutContainer,
  CheckoutListCard,
  CheckoutListTypePayment,
  CheckoutInput,
  ListCardItem,
  CheckoutListTotal,
  ListTotalItem,
  ButtonConfirm,
  Message,
  ButtonPaymentType,
} from './styles'
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
    <CheckoutContainer className="container">
      <section>
        <header>
          <CheckoutAreaTitle>Complete seu pedido</CheckoutAreaTitle>
        </header>

        <CheckoutCompleteOrderFilds>
          <CheckoutCard>
            <CheckoutCardHeader>
              <MapPinLine color={theme.palette['yellow-900']} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutCardHeader>
            <CheckoutInput>
              <input type="text" id="nome" placeholder="dadad" />
              <label htmlFor="nome">Nome</label>
            </CheckoutInput>{' '}
            <CheckoutInput>
              <input type="text" id="teste1" placeholder="dada" />
              <label htmlFor="teste1">teste1</label>
              <span>Opcional</span>
            </CheckoutInput>
            <CheckoutInput>
              <input
                type="text"
                id="teste2"
                value="Jujuba"
                placeholder="dadad"
              />
              <label htmlFor="teste2">teste2</label>
              <span>Opcional</span>
            </CheckoutInput>
          </CheckoutCard>

          <CheckoutCard>
            <CheckoutCardHeader>
              <CurrencyDollar color={theme.palette['purple-500']} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutCardHeader>
            <CheckoutListTypePayment>
              <ButtonPaymentType>
                <input type="radio" name="typePayment" id="creditCard" />
                <label htmlFor="creditCard">
                  <CreditCard color="#8641be" />
                  CARTÃO DE CRÉDITO
                </label>
              </ButtonPaymentType>
              <ButtonPaymentType>
                <input type="radio" name="typePayment" id="debitCard" />
                <label htmlFor="debitCard">
                  <Bank color="#8641be" />
                  CARTÃO DE DÉBITO
                </label>
              </ButtonPaymentType>

              <ButtonPaymentType>
                <input type="radio" name="typePayment" id="money" />
                <label htmlFor="money">
                  <Money color="#8641be" />
                  DINHEIRO
                </label>
              </ButtonPaymentType>
            </CheckoutListTypePayment>
            <CheckoutListTypePayment>
              <li>
                <ButtonSelect onSelectButton={(e) => console.log(e)}>
                  <CreditCard color="#8641be" />
                  CARTÃO DE CRÉDITO
                </ButtonSelect>
              </li>
              <li>
                <ButtonSelect onSelectButton={(e) => console.log(e)}>
                  <Bank color="#8641be" />
                  CARTÃO DE DÉBITO
                </ButtonSelect>
              </li>
              <li>
                <ButtonSelect onSelectButton={(e) => console.log(e)}>
                  <Money color="#8641be" />
                  DINHEIRO
                </ButtonSelect>
              </li>
            </CheckoutListTypePayment>
          </CheckoutCard>
        </CheckoutCompleteOrderFilds>
      </section>

      <aside>
        <header>
          <CheckoutAreaTitle>Cafés selecionados</CheckoutAreaTitle>
        </header>
        <CheckoutCard as="div" borderVariation="card">
          {!hasCartItems && <Message>Escolha algum Café :-)</Message>}

          {hasCartItems && (
            <CheckoutListCard>
              {cartItems.map((item, index) => (
                <ListCardItem key={`checkout-listcard-${index}`}>
                  <Card
                    coffee={item}
                    key={`checkout-${index}-${item.id}`}
                    variation="row"
                  />
                </ListCardItem>
              ))}
            </CheckoutListCard>
          )}

          <CheckoutListTotal>
            <li>
              <ListTotalItem>
                Total de itens <span>{infoCart.quantity}</span>
              </ListTotalItem>
            </li>
            <li>
              <ListTotalItem>
                Entrega <span>{helperFormatCurrencyBRL(deliverValue)}</span>
              </ListTotalItem>
            </li>
            <li>
              <ListTotalItem big>
                Total <span>{totalDelivery}</span>
              </ListTotalItem>
            </li>
          </CheckoutListTotal>
          {hasCartItems ? (
            <ButtonConfirm onClick={handleToSuccess}>
              CONFIRMAR PEDIDO{' '}
            </ButtonConfirm>
          ) : (
            <ButtonConfirm onClick={handleToHome}>ESCOLHER CAFÉS</ButtonConfirm>
          )}
        </CheckoutCard>
      </aside>
    </CheckoutContainer>
  )
}
