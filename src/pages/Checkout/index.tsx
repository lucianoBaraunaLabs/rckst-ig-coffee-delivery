import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ButtonSelect } from '../../components/ButtonSelect'
import {
  CheckoutAreaTitle,
  CheckoutCard,
  CheckoutCardHeader,
  CheckoutCompleteOrderFilds,
  CheckoutContainer,
  CheckoutListTypePayment,
} from './styles'

export function Checkout() {
  const theme = useTheme()

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
            <p>campos do endereço aqui</p>
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
          <p>conteúdo do pedido</p>
        </CheckoutCard>
      </aside>
    </CheckoutContainer>
  )
}
