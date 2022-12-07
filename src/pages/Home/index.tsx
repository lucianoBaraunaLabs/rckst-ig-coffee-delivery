import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'
import imgCoffe from '../../assets/img-banner.png'
import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroImg,
  HeroList,
  HeroListIcon,
  HeroSubTitle,
  HeroTitle,
} from './styles'
import { useTheme } from 'styled-components'

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
                  <HeroListIcon backgroundColor={theme.palette['yellow-900']}>
                    <ShoppingCart weight="fill" />
                  </HeroListIcon>
                  <p>Compra simples e segura</p>
                </li>
                <li>
                  <HeroListIcon backgroundColor={theme.palette['yellow-500']}>
                    <Timer weight="fill" />
                  </HeroListIcon>
                  <p>Entrega rápida e rastreada</p>
                </li>
                <li>
                  <HeroListIcon backgroundColor={theme.palette.text}>
                    <Package weight="fill" />
                  </HeroListIcon>
                  <p>Embalagem mantém o café intacto</p>
                </li>
                <li>
                  <HeroListIcon backgroundColor={theme.palette['purple-500']}>
                    <Coffee weight="fill" />
                  </HeroListIcon>
                  <p>O café chega fresquinho até você</p>
                </li>
              </HeroList>
            </HeroContent>
            <HeroImg>
              <img src={imgCoffe} alt="Copo de café ilustrativo" />
            </HeroImg>
          </HeroContainer>
        </Hero>
        <section className="container">
          <h3>Nossos cafés</h3>
          <Card />
        </section>
      </main>
    </>
  )
}
