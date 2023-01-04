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

export function Success() {
  const theme = useTheme()

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                &nbsp; Farrapos - Porto Alegre, RS
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
                  <strong>20 min - 30 min</strong>
                </time>
              </InfoContent>
            </Info>
            <Info>
              <IconCircle
                customColor={theme.palette['yellow-900']}
                icon={<CurrencyDollar weight="fill" />}
              />
              <InfoContent>
                <p>
                  Pagamento na entrega <strong>Cartão de crédito</strong>
                </p>
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
