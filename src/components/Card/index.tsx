import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
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

import { Coffee, CoffeeContext, CoffeId } from '../../contexts/CoffeeContext'

interface CardProps extends CardPropStyles {
  coffee: Coffee
}

export function Card({ variation = 'card', coffee }: CardProps) {
  const { addCoffee, removeCoffee } = useContext(CoffeeContext)
  const [quantity, setQuantity] = useState(1)
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'
  const currencyValue = new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(coffee.price)

  function handleDecrementItem() {
    setQuantity((state) => state - 1)
  }
  function handleIncrementItem() {
    setQuantity((state) => state + 1)
  }

  function handleAddProduct() {
    const product = { ...coffee, quantity }
    addCoffee(product)
  }

  function handleRemoveProduct(coffeeId: CoffeId) {
    removeCoffee(coffeeId)
  }

  return (
    <CardContainer variation={variation}>
      <ImageContainer>
        <img src={`./src/assets/produtos/${coffee.img}`} alt="" />
      </ImageContainer>

      <InfoContainer>
        {isVariationCard && (
          <List>
            {coffee.tags.map((tagValue) => {
              return <li key={`${coffee.id}_${tagValue}`}>{tagValue}</li>
            })}
          </List>
        )}

        <Title>{coffee.name}</Title>

        {isVariationCard && <Text>{coffee.description}</Text>}

        {isVariationRow && (
          <Controls>
            <InputQuantity
              onDecrement={handleDecrementItem}
              onIncrement={handleIncrementItem}
              quantity={quantity}
            />
            <ButtonRemove
              variation="simple"
              onClick={() => handleRemoveProduct(coffee.id)}
            >
              <Trash size="1rem" /> REMOVER
            </ButtonRemove>
          </Controls>
        )}
      </InfoContainer>

      <Footer>
        <Price>
          <span>R$</span> {currencyValue}
        </Price>
        {isVariationCard && (
          <Controls as="div">
            <InputQuantity
              onDecrement={handleDecrementItem}
              onIncrement={handleIncrementItem}
              quantity={quantity}
            />
            <ButtonCart
              onClick={handleAddProduct}
              title="Adicionar ao carrinho"
            >
              <ShoppingCartSimple weight="fill" />
            </ButtonCart>
          </Controls>
        )}
      </Footer>
    </CardContainer>
  )
}
