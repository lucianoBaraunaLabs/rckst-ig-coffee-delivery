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
import { useNavigate } from 'react-router-dom'

type Payment = 'paymentCreditCard' | 'paymentDebitCard' | 'paymentMoney'

const orderPayment: Record<Payment, string> = {
  paymentCreditCard: 'Cartão de crédito',
  paymentDebitCard: 'Cartão de débito',
  paymentMoney: 'Pagamento em dinheiro',
}

export function Success() {
  const theme = useTheme()
  const { order } = useContext(CoffeeContext)
  const { deliveryTime, deliveryTo } = order
  const textPayment = orderPayment[deliveryTo.paymentType as Payment]
  const navigate = useNavigate()
  const orderIsEmpty = Object.values(order.deliveryTo).every(
    (value) => value === '',
  )

  useEffect(() => {
    if (orderIsEmpty) {
      navigate('/')
    }
  }, [navigate, orderIsEmpty])

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
                  {deliveryTo.street}, {deliveryTo.addressNumber},{' '}
                  {deliveryTo.complement}
                </strong>
                &nbsp; {deliveryTo.neighborhood} - {deliveryTo.city},{' '}
                {deliveryTo.state}
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
