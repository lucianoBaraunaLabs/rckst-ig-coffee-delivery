import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DeliveryForm } from '~/pages/Checkout/components/DeliveryForm'
import { CoffeSelected } from '~/pages/Checkout/components/CoffeSelected'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '~/contexts/CoffeeContext'

const regexCep = /\d{8}/
const regexAddressNumber = /\d/

/* eslint-disable no-unused-vars */
enum PaymentsTypes {
  creditCard = 'creditCard',
  debitCard = 'debitCard',
  money = 'money',
}
/* eslint-enable no-unused-vars */

const deliveryFormValidationSchema = zod.object({
  zipcode: zod.string().regex(regexCep, {
    message: 'Cep inválido. O valor precisa ter 8 números.',
  }),
  street: zod.string().min(3, 'Endereço precisar ter 3 caracteres no mínimo.'),
  addressNumber: zod
    .string()
    .min(1, 'Número é obrigatório.')
    .regex(regexAddressNumber, 'O campo só pode receber números.'),
  complement: zod.string(),
  neighborhood: zod
    .string()
    .min(1, 'Bairro é obrigatório.')
    .min(3, 'Bairro precisar ter 3 caracteres no mínimo.'),
  city: zod.string().min(3, 'Cidade precisar ter 3 caracteres no mínimo.'),
  uf: zod.string().min(1, 'O Estado é obrigatório.').max(2),
  paymentType: zod.nativeEnum(PaymentsTypes, {
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento',
      }
    },
  }),
})

export type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { confirmOrder, clearCart } = useContext(CoffeeContext)
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormValidationSchema),
    defaultValues: {
      zipcode: '',
      street: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentType: undefined,
    },
  })

  const { handleSubmit } = deliveryForm

  function handleDelivery(data: DeliveryFormData) {
    confirmOrder(data)
    navigate('/success', {
      state: data,
    })
    clearCart()
  }

  return (
    <S.CheckoutContainer className="container">
      <form onSubmit={handleSubmit(handleDelivery)}>
        <FormProvider {...deliveryForm}>
          <CoffeSelected />
          <DeliveryForm />
        </FormProvider>
      </form>
    </S.CheckoutContainer>
  )
}
