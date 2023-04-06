import { createContext, ReactNode, useReducer } from 'react'
import { DeliveryFormData } from '~/pages/Checkout'
import {
  addCoffeeInCartAction,
  removeCoffeeFromCartAction,
  confirmCoffeOrderAction,
  changeCoffeQuantityAction,
  coffeeReducer,
  coffeInitialState,
  CoffeId,
  Coffee,
  ChangeCoffeeItemQuantity,
} from '~/reducers/coffee'

interface CoffeeContextType {
  cartItems: Coffee[]
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: CoffeId) => void
  changeCoffeeQuantity: ({
    coffee,
    typeChange,
  }: ChangeCoffeeItemQuantity) => void
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
  const [coffeState, dispatch] = useReducer(coffeeReducer, coffeInitialState)
  const { coffees, order } = coffeState

  const infoCart = coffees.reduce(
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

  function addCoffee(coffeeItem: Coffee) {
    dispatch(addCoffeeInCartAction(coffeeItem))
  }

  function removeCoffee(coffeId: CoffeId) {
    dispatch(removeCoffeeFromCartAction(coffeId))
  }

  function changeCoffeeQuantity({
    coffee,
    typeChange,
  }: ChangeCoffeeItemQuantity) {
    dispatch(changeCoffeQuantityAction({ coffee, typeChange }))
  }

  function confirmOrder(data: DeliveryFormData) {
    dispatch(confirmCoffeOrderAction(data))
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartItems: coffees,
        addCoffee,
        removeCoffee,
        changeCoffeeQuantity,
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
