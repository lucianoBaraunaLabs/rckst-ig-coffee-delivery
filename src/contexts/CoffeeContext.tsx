import { createContext, ReactNode, useReducer } from 'react'
import { DeliveryFormData } from '~/pages/Checkout'
import {
  addCoffeeInCartAction,
  removeCoffeeFromCartAction,
  confirmCoffeOrderAction,
  changeCoffeQuantityAction,
  clearCartAction,
  coffeeReducer,
  coffeInitialState,
  CoffeId,
  Coffee,
  Order,
  ChangeCoffeeItemQuantity,
} from '~/reducers/coffee'

interface CoffeeContextType {
  cart: {
    items: Coffee[]
    quantityOfItems: number
    priceTotal: number
  }
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: CoffeId) => void
  changeCoffeeQuantity: ({
    coffee,
    typeChange,
  }: ChangeCoffeeItemQuantity) => void
  clearCart: () => void
  confirmOrder: (data: DeliveryFormData) => void
  order: Order
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
          quantityOfItems: prev.quantityOfItems + curr.quantity,
          priceTotal: curr.price * curr.quantity + prev.priceTotal,
        }
      }
      return { ...prev }
    },
    {
      quantityOfItems: 0,
      priceTotal: 0,
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

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart: {
          items: coffees,
          ...infoCart,
        },
        order,
        addCoffee,
        removeCoffee,
        changeCoffeeQuantity,
        confirmOrder,
        clearCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
