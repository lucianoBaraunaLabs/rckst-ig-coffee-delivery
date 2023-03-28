import { createContext, ReactNode, useState } from 'react'
import { DeliveryFormData } from '~/pages/Checkout'

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

interface Order {
  deliveryTo: DeliveryFormData
  deliveryTime: string
}

interface CoffeeContextType {
  cartItems: Coffee[]
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: CoffeId) => void
  confirmOrder: (data: DeliveryFormData) => void
  infoCart: {
    quantity: number
    total: number
  }
  deliverValue: number
  order: {
    deliveryTime: string
    deliveryTo: DeliveryFormData
  }
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
  const [order, setOrder] = useState<Order>({
    deliveryTime: '20 min - 30 min',
    deliveryTo: {
      zipcode: '',
      street: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      typePayment: '',
    },
  })

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

  function confirmOrder(data: DeliveryFormData) {
    setOrder((prev) => {
      return {
        ...prev,
        deliveryTo: data,
      }
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartItems,
        addCoffee,
        removeCoffee,
        confirmOrder,
        infoCart: { ...infoCart },
        deliverValue: 3.9,
        order,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
