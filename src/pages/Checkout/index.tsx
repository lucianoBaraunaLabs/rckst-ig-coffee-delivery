import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ButtonSelect } from '../../components/ButtonSelect'
import { Card } from '../../components/Card'
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
          <CheckoutListCard>
            <ListCardItem>
              <Card variation="row" />
            </ListCardItem>
            <ListCardItem>
              <Card variation="row" />
            </ListCardItem>
          </CheckoutListCard>

          <CheckoutListTotal>
            <li>
              <ListTotalItem>
                Total de itens <span>R$ 29,70</span>
              </ListTotalItem>
            </li>
            <li>
              <ListTotalItem>
                Entrega <span>R$ 29,70</span>
              </ListTotalItem>
            </li>
            <li>
              <ListTotalItem big>
                Total <span>R$ 29,70</span>
              </ListTotalItem>
            </li>
          </CheckoutListTotal>

          <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
        </CheckoutCard>
      </aside>
    </CheckoutContainer>
  )
}
