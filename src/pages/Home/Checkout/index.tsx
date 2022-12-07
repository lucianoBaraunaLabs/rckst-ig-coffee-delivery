import { CurrencyDollar, MapPin } from 'phosphor-react'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <section>
        <header>
          <h2>Complete seu pedido</h2>
        </header>

        <div>
          <section>
            <header>
              <MapPin />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <p>campos do endereço aqui</p>
          </section>

          <section>
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
          </section>
        </div>
      </section>
      <aside>
        <header>
          <h2>Cafés selecionados</h2>
        </header>
      </aside>
    </CheckoutContainer>
  )
}
