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
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: CoffeId) => void
  infoCart: {
    quantity: number
    total: number
  }
  deliverValue: number
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
    (prev, curr) => {
      if (curr.quantity && curr.price) {
        return {
          quantity: prev.quantity + curr.quantity,
          total: curr.price * curr.quantity + prev.total,
        }
      }
      return { ...prev }
    },
    {
      quantity: 0,
      total: 0,
    },
  )

  function addCoffee(coffee: Coffee) {
    const alreadyInCart = cartItems.find((item) => item.id === coffee.id)

    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, coffee])
    } else {
      setCartItems((prev) => {
        return prev.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: coffee.quantity }
            : { ...item },
        )
      })
    }
  }

  function removeCoffee(coffeId: CoffeId) {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== coffeId))
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartItems,
        addCoffee,
        removeCoffee,
        infoCart: { ...infoCart },
        deliverValue: 3.9,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
