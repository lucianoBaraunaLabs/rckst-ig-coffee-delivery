import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'
import imgCoffe from '../../assets/img-banner.png'
import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroImg,
  HeroList,
  HeroSubTitle,
  HeroTitle,
  Products,
  ProductsList,
} from './styles'
import { useTheme } from 'styled-components'
import { IconCircle } from '../../components/IconCircle'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <main>
        <Hero>
          <HeroContainer className="container">
            <HeroContent>
              <HeroTitle>
                Encontre o café perfeito para qualquer hora do dia
              </HeroTitle>
              <HeroSubTitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </HeroSubTitle>
              <HeroList>
                <li>
                  <IconCircle
                    customColor={theme.palette['yellow-900']}
                    icon={<ShoppingCart weight="fill" />}
                  />
                  <p>Compra simples e segura</p>
                </li>
                <li>
                  <IconCircle
                    customColor={theme.palette['yellow-500']}
                    icon={<Timer weight="fill" />}
                  />
                  <p>Entrega rápida e rastreada</p>
                </li>
                <li>
                  <IconCircle
                    customColor={theme.palette.text}
                    icon={<Package weight="fill" />}
                  />
                  <p>Embalagem mantém o café intacto</p>
                </li>
                <li>
                  <IconCircle
                    customColor={theme.palette['purple-500']}
                    icon={<Coffee weight="fill" />}
                  />
                  <p>O café chega fresquinho até você</p>
                </li>
              </HeroList>
            </HeroContent>
            <HeroImg>
              <img src={imgCoffe} alt="Copo de café ilustrativo" />
            </HeroImg>
          </HeroContainer>
        </Hero>
        <Products className="container">
          <h3>Nossos cafés</h3>
          <ProductsList>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ProductsList>
        </Products>
      </main>
    </>
  )
}
