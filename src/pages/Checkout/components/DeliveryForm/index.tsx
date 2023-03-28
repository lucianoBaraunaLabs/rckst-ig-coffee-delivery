import { useFormContext } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { TitleSection } from '~/pages/Checkout/components/TitleSection'
import { CardBox } from '~/pages/Checkout/components/CardBox'
import { ErrorForm } from '../ErrorForm'

export function DeliveryForm() {
  const theme = useTheme()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const listFieldsDelivery = [
    'zipcode',
    'street',
    'addressNumber',
    'neighborhood',
    'city',
    'state',
  ]

  const hasError = Object.keys(errors).length > 0

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

          {hasError && (
            <ErrorForm errors={errors} listFields={listFieldsDelivery} />
          )}

          <S.FormAddressDelivery>
            <S.CheckoutInput size="30%">
              <input
                type="text"
                id="zipcode"
                placeholder="Digite seu cep"
                {...register('zipcode', { required: true })}
              />
              <label htmlFor="zipcode">Cep</label>
            </S.CheckoutInput>
            <S.CheckoutInput>
              <input
                type="text"
                id="street"
                placeholder="Digite o endereço"
                {...register('street', { required: true })}
              />
              <label htmlFor="street">Rua</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="30%">
              <input
                type="text"
                id="addressNumber"
                placeholder="Digite o número"
                {...register('addressNumber', { required: true })}
              />
              <label htmlFor="addressNumber">Número</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="67%">
              <input
                type="text"
                id="complement"
                placeholder="dada"
                {...register('complement')}
              />
              <label htmlFor="complement">Complemento</label>
              <span>Opcional</span>
            </S.CheckoutInput>
            <S.CheckoutInput size="30%">
              <input
                type="text"
                id="neighborhood"
                placeholder="dadad"
                {...register('neighborhood', { required: true })}
              />
              <label htmlFor="neighborhood">Bairro</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="44%">
              <input
                type="text"
                id="city"
                placeholder="dadad"
                {...register('city', { required: true })}
              />
              <label htmlFor="city">Cidade</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="20%">
              <input
                type="text"
                id="state"
                placeholder="dadad"
                {...register('state', { required: true })}
              />
              <label htmlFor="state">Estado</label>
            </S.CheckoutInput>
          </S.FormAddressDelivery>
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
          {hasError && (
            <ErrorForm errors={errors} listFields={['typePayment']} />
          )}
          <S.CheckoutListTypePayment>
            <S.ButtonPaymentType>
              <input
                type="radio"
                id="creditCard"
                value={'paymentCreditCard'}
                {...register('typePayment', { required: true })}
              />
              <label htmlFor="creditCard">
                <CreditCard color="#8641be" />
                CARTÃO DE CRÉDITO
              </label>
            </S.ButtonPaymentType>
            <S.ButtonPaymentType>
              <input
                type="radio"
                id="debitCard"
                value={'paymentDebitCard'}
                {...register('typePayment', { required: true })}
              />
              <label htmlFor="debitCard">
                <Bank color="#8641be" />
                CARTÃO DE DÉBITO
              </label>
            </S.ButtonPaymentType>

            <S.ButtonPaymentType>
              <input
                type="radio"
                id="money"
                value={'paymentMoney'}
                {...register('typePayment', { required: true })}
              />
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
