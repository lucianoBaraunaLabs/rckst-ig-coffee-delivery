import { createContext, ReactNode, useState } from 'react'

export type CoffeId = string

export interface Coffee {
  id: CoffeId
  name: string
  tags: string[]
  description: string
  price: number
  img: string
  quantity?: number
}

interface CoffeeContextType {
  cartItems: Coffee[]
  quantityInCart: number
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: CoffeId) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>([])
  const infoCart = cartItems.reduce(
    (prevValue, currValue) => {
      let totalItemsQuantity = 0

      if (currValue.quantity) {
        totalItemsQuantity = prevValue.totalItemsQuantity + currValue.quantity
      }
      return {
        totalItemsQuantity,
      }
    },
    {
      totalItemsQuantity: 0,
      totalItemsValue: 0,
    },
  )

  function addCoffee(coffee: Coffee) {
    const alreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (alreadyInCart < 0) {
      setCartItems((prevState) => [...prevState, coffee])
    } else {
      setCartItems((prevState) => {
        prevState[alreadyInCart].quantity = coffee.quantity
        return [...prevState]
      })
    }
  }

  function removeCoffee(coffeId: CoffeId) {
    setCartItems((prevState) =>
      prevState.filter((cartItem) => cartItem.id !== coffeId),
    )
  }

  return (
    <CoffeeContext.Provider value={{ cartItems, addCoffee, removeCoffee }}>
      {children}
    </CoffeeContext.Provider>
  )
}
