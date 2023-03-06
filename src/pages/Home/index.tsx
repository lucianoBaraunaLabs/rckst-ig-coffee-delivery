import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'
import imgCoffe from '../../assets/img-banner.png'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { IconCircle } from '../../components/IconCircle'

import dataProducts from '../../assets/produtos/products.json'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <main>
        <S.Hero>
          <S.HeroContainer className="container">
            <S.HeroContent>
              <S.HeroTitle>
                Encontre o café perfeito para qualquer hora do dia
              </S.HeroTitle>
              <S.HeroSubTitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </S.HeroSubTitle>
              <S.HeroList>
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
              </S.HeroList>
            </S.HeroContent>
            <S.HeroImg>
              <img src={imgCoffe} alt="Copo de café ilustrativo" />
            </S.HeroImg>
          </S.HeroContainer>
        </S.Hero>
        <S.Products className="container">
          <h3>Nossos cafés</h3>
          <S.ProductsList>
            {dataProducts.map((product) => {
              return (
                <li key={product.id}>
                  <Card coffee={product} />
                </li>
              )
            })}
          </S.ProductsList>
        </S.Products>
      </main>
    </>
  )
}
