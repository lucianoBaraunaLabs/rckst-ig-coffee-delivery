import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import * as S from './styles'

import { InputQuantity } from '~/components/InputQuantity'

import { CoffeeContext } from '~/contexts/CoffeeContext'
import { CoffeId, Coffee, ChangeItemQuantity } from '~/reducers/coffee'

interface CardProps extends S.CardPropStyles {
  coffee: Coffee
}

export function Card({ variation = 'card', coffee }: CardProps) {
  const { addCoffee, removeCoffee, changeCoffeeQuantity, cartItems } =
    useContext(CoffeeContext)
  const [quantityProd, setQuantityProd] = useState(coffee.quantity || 1)
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'
  const currencyValue = new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(coffee.price)

  const cartItemInCartQuantity = getCoffeItemCartQuantity()

  function getCoffeItemCartQuantity() {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    return cartItems[coffeeExistsInCart]?.quantity
      ? cartItems[coffeeExistsInCart]?.quantity
      : 1
  }

  function handleChangeQuantity(typeChange: ChangeItemQuantity) {
    if (typeChange === 'decrease') {
      changeCoffeeQuantity({ coffee, typeChange: 'decrease' })
    }
    if (typeChange === 'increase') {
      changeCoffeeQuantity({ coffee, typeChange: 'increase' })
    }
  }

  function handleQuantity(typeChange: ChangeItemQuantity) {
    if (typeChange === 'decrease') {
      changeCoffeeQuantity({ coffee, typeChange: 'decrease' })
      setQuantityProd((state) => state - 1)
    }
    if (typeChange === 'increase') {
      changeCoffeeQuantity({ coffee, typeChange: 'increase' })
      setQuantityProd((state) => state + 1)
    }
  }

  function handleAddProduct() {
    const product = { ...coffee, quantity: quantityProd }
    addCoffee(product)
  }

  function handleRemoveProduct(coffeeId: CoffeId) {
    removeCoffee(coffeeId)
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
              onDecrement={() => handleChangeQuantity('decrease')}
              onIncrement={() => handleChangeQuantity('increase')}
              quantity={cartItemInCartQuantity}
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
              onDecrement={() => handleQuantity('decrease')}
              onIncrement={() => handleQuantity('increase')}
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
