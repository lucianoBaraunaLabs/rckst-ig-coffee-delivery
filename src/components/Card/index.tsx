import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import * as S from './styles'

import { InputQuantity } from '~/components/InputQuantity'

import { CoffeeContext } from '~/contexts/CoffeeContext'
import { CoffeId, Coffee } from '~/reducers/coffee/reducer'

interface CardProps extends S.CardPropStyles {
  coffee: Coffee
}

export function Card({ variation = 'card', coffee }: CardProps) {
  const { addCoffee, removeCoffee } = useContext(CoffeeContext)
  const [quantityProd, setQuantityProd] = useState(coffee.quantity || 1)
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'
  const currencyValue = new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(coffee.price)

  function handleDecrement() {
    setQuantityProd((state) => state - 1)
  }

  function handleIncrement() {
    setQuantityProd((state) => state + 1)
  }

  function handleAddProduct() {
    const product = { ...coffee, quantity: quantityProd }
    console.log('Card handleAddProduct: ', product)
    addCoffee(product)
  }

  function handleRemoveProduct(coffeeId: CoffeId) {
    removeCoffee(coffeeId)
  }

  function handleChangeDecrement() {
    setQuantityProd((state) => {
      console.log('handleChangeDecrement: ', state)
      return state - 1
    })
    handleAddProduct()
  }

  function handleChangeIncrement() {
    setQuantityProd((state) => {
      console.log('handleChangeIncrement: ', state)

      return state + 1
    })
    handleAddProduct()
  }

  return (
    <S.CardContainer variation={variation}>
      <S.ImageContainer>
        <img src={`./src/assets/produtos/${coffee.img}`} alt="" />
      </S.ImageContainer>

      <S.InfoContainer>
        {isVariationCard && (
          <S.List>
            {coffee.tags.map((tagValue) => {
              return <li key={`${coffee.id}_${tagValue}`}>{tagValue}</li>
            })}
          </S.List>
        )}

        <S.Title>{coffee.name}</S.Title>

        {isVariationCard && <S.Text>{coffee.description}</S.Text>}

        {isVariationRow && (
          <S.Controls>
            <InputQuantity
              onDecrement={handleChangeDecrement}
              onIncrement={handleChangeIncrement}
              quantity={quantityProd}
            />
            <S.ButtonRemove
              variation="simple"
              onClick={() => handleRemoveProduct(coffee.id)}
            >
              <Trash size="1rem" /> REMOVER
            </S.ButtonRemove>
          </S.Controls>
        )}
      </S.InfoContainer>

      <S.Footer>
        <S.Price>
          <span>R$</span> {currencyValue}
        </S.Price>
        {isVariationCard && (
          <S.Controls as="div">
            <InputQuantity
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              quantity={quantityProd}
            />
            <S.ButtonCart
              onClick={handleAddProduct}
              title="Adicionar ao carrinho"
            >
              <ShoppingCartSimple weight="fill" />
            </S.ButtonCart>
          </S.Controls>
        )}
      </S.Footer>
    </S.CardContainer>
  )
}
