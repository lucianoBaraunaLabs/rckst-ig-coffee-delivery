import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { TitleSection } from '../TitleSection'
import { CardBox } from '../CardBox'

export function OrderSideBar() {
  const theme = useTheme()

  return (
    <section>
      <header>
        <TitleSection>Complete seu pedido</TitleSection>
      </header>

      <S.CheckoutCompleteOrderFilds>
        <CardBox>
          <S.CheckoutCardHeader>
            <MapPinLine color={theme.palette['yellow-900']} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </S.CheckoutCardHeader>
          <div>
            <S.CheckoutInput>
              <input type="text" id="zipcode" placeholder="Digite seu cep" />
              <label htmlFor="zipcode">Cep</label>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="street" placeholder="Digite o endereço" />
              <label htmlFor="street">Rua</label>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="number" placeholder="Digite o número" />
              <label htmlFor="number">Número</label>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="complemento" placeholder="dada" />
              <label htmlFor="complemento">Complemento</label>
              <span>Opcional</span>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="bairro" placeholder="dadad" />
              <label htmlFor="bairro">Bairro</label>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="cidade" placeholder="dadad" />
              <label htmlFor="cidade">Cidade</label>
            </S.CheckoutInput>
          </div>
          <div>
            <S.CheckoutInput>
              <input type="text" id="estado" placeholder="dadad" />
              <label htmlFor="estado">Estado</label>
            </S.CheckoutInput>
          </div>
        </CardBox>

        <CardBox>
          <S.CheckoutCardHeader>
            <CurrencyDollar color={theme.palette['purple-500']} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
        </CardBox>
      </S.CheckoutCompleteOrderFilds>
    </section>
  )
}
