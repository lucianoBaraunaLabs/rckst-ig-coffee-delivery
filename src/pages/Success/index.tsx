import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { IconCircle } from '../../components/IconCircle'
import ImgDelivery from '../../assets/img-delivery.svg'

import {
  CardDelivery,
  CardDeliveryWrap,
  Container,
  Header,
  ImgWrap,
  Info,
  InfoContent,
  Title,
} from './styles'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '~/contexts/CoffeeContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { DeliveryFormData } from '~/pages/Checkout'

type Payment = 'creditCard' | 'debitCard' | 'money'

const orderPayment: Record<Payment, string> = {
  creditCard: 'Cartão de crédito',
  debitCard: 'Cartão de débito',
  money: 'Pagamento em dinheiro',
}

interface LocationOrder {
  state: DeliveryFormData
}

export function Success() {
  const theme = useTheme()
  const { order } = useContext(CoffeeContext)
  const { deliveryTime, deliveryTo } = order
  const textPayment = orderPayment[deliveryTo.paymentType as Payment]
  const navigate = useNavigate()
  const { state } = useLocation() as unknown as LocationOrder

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <Container className="container">
      <section>
        <Header>
          <Title>Uhu! Pedido confirmado</Title>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>
        <CardDeliveryWrap>
          <CardDelivery>
            <Info>
              <IconCircle
                customColor={theme.palette['purple-500']}
                icon={<MapPin weight="fill" />}
              />
              <InfoContent as="address">
                Entrega em{' '}
                <strong>
                  {state.street}, {state.addressNumber}, {state.complement}
                </strong>
                &nbsp; {state.neighborhood} - {state.city}, {state.uf}
              </InfoContent>
            </Info>
            <Info>
              <IconCircle
                customColor={theme.palette['yellow-500']}
                icon={<Timer weight="fill" />}
              />
              <InfoContent>
                Previsão de entrega
                <time>
                  <strong>{deliveryTime}</strong>
                </time>
              </InfoContent>
            </Info>
            <Info>
              <IconCircle
                customColor={theme.palette['yellow-900']}
                icon={<CurrencyDollar weight="fill" />}
              />
              <InfoContent>
                Pagamento na entrega <strong>{textPayment}</strong>
              </InfoContent>
            </Info>
          </CardDelivery>
        </CardDeliveryWrap>
      </section>
      <ImgWrap>
        <img src={ImgDelivery} alt="Ilustração entregador" />
      </ImgWrap>
    </Container>
  )
}
