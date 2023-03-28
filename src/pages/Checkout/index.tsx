import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DeliveryForm } from '~/pages/Checkout/components/DeliveryForm'
import { CoffeSelected } from '~/pages/Checkout/components/CoffeSelected'
import * as S from './styles'

const regexCep = /\d{8}/
const regexAddressNumber = /\d/

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
  state: zod.string().min(1, 'O Estado é obrigatório.').max(2),
  typePayment: zod.string().startsWith('payment', {
    message: 'Escolha uma forma de pagamento.',
  }),
})

type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>

export function Checkout() {
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormValidationSchema),
    defaultValues: {
      zipcode: '',
      street: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      typePayment: '',
    },
  })

  const { handleSubmit } = deliveryForm

  function handleDelivery(data: DeliveryFormData) {
    console.log('enviou: ', data)
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
