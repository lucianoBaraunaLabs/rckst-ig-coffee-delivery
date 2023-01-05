import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { useState } from 'react'
import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  List,
  Title,
  Text,
  Price,
  ButtonCart,
  Footer,
  Controls,
  CardPropStyles,
  ButtonRemove,
} from './styles'

import { InputQuantity } from '../InputQuantity'

interface CardProps extends CardPropStyles {
  dataProduct: {
    id: string
    name: string
    tags: string[]
    description: string
    value: number
    img: string
  }
}

export function Card({ variation = 'card', dataProduct }: CardProps) {
  const [quantyItem, setQuantyItem] = useState(0)
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'

  function handleDecrementItem() {
    setQuantyItem((prevState) => --prevState)
  }
  function handleIncrementItem() {
    setQuantyItem((prevState) => ++prevState)
  }

  return (
    <CardContainer variation={variation}>
      <ImageContainer>
        <img src={`./src/assets/produtos/${dataProduct.img}`} alt="" />
      </ImageContainer>

      <InfoContainer>
        {isVariationCard && (
          <List>
            {dataProduct.tags.map((tagValue) => {
              return <li key={`${dataProduct.id}_${tagValue}`}>{tagValue}</li>
            })}
          </List>
        )}

        <Title>{dataProduct.name}</Title>

        {isVariationCard && <Text>{dataProduct.description}</Text>}

        {isVariationRow && (
          <Controls>
            <InputQuantity
              onDecrement={handleDecrementItem}
              onIncrement={handleIncrementItem}
              disableDecrement={quantyItem <= 0}
              quantity={quantyItem}
            />
            <ButtonRemove variation="simple">
              <Trash size="1rem" /> REMOVER
            </ButtonRemove>
          </Controls>
        )}
      </InfoContainer>

      <Footer>
        <Price>
          <span>R$</span> {dataProduct.value}
        </Price>
        {isVariationCard && (
          <Controls as="div">
            <InputQuantity
              onDecrement={handleDecrementItem}
              onIncrement={handleIncrementItem}
              disableDecrement={quantyItem <= 0}
              quantity={quantyItem}
            />
            <ButtonCart to="/checkout" title="Ir para o checkout">
              <ShoppingCartSimple weight="fill" />
            </ButtonCart>
          </Controls>
        )}
      </Footer>
    </CardContainer>
  )
}
