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
                placeholder="Digite o complemento"
                {...register('complement')}
              />
              <label htmlFor="complement">Complemento</label>
              <span>Opcional</span>
            </S.CheckoutInput>
            <S.CheckoutInput size="30%">
              <input
                type="text"
                id="neighborhood"
                placeholder="Diget seu bairro"
                {...register('neighborhood', { required: true })}
              />
              <label htmlFor="neighborhood">Bairro</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="44%">
              <input
                type="text"
                id="city"
                placeholder="Digite sua cidade"
                {...register('city', { required: true })}
              />
              <label htmlFor="city">Cidade</label>
            </S.CheckoutInput>
            <S.CheckoutInput size="20%">
              <input
                type="text"
                id="uf"
                placeholder="Digite seu estado"
                {...register('uf', { required: true })}
              />
              <label htmlFor="uf">Estado</label>
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
            <ErrorForm errors={errors} listFields={['paymentType']} />
          )}
          <S.CheckoutListPaymentType>
            <S.ButtonPaymentType>
              <input
                type="radio"
                id="creditCard"
                value={'creditCard'}
                {...register('paymentType', { required: true })}
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
                value={'debitCard'}
                {...register('paymentType', { required: true })}
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
                value={'money'}
                {...register('paymentType', { required: true })}
              />
              <label htmlFor="money">
                <Money color="#8641be" />
                DINHEIRO
              </label>
            </S.ButtonPaymentType>
          </S.CheckoutListPaymentType>
        </CardBox>
      </S.CheckoutCompleteOrderFilds>
    </section>
  )
}
