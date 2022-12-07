import { CurrencyDollar, MapPin } from 'phosphor-react'
import {
  CheckoutAreaTitle,
  CheckoutCard,
  CheckoutCompleteOrderFilds,
  CheckoutContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <section>
        <header>
          <CheckoutAreaTitle>Complete seu pedido</CheckoutAreaTitle>
        </header>

        <CheckoutCompleteOrderFilds>
          <CheckoutCard>
            <header>
              <MapPin />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <p>campos do endereço aqui</p>
          </CheckoutCard>

          <CheckoutCard>
            <header>
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <p>campos do endereço aqui</p>
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
