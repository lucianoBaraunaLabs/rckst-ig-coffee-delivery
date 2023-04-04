import { createContext, ReactNode, useReducer } from 'react'
import { DeliveryFormData } from '~/pages/Checkout'
import {
  addCoffeeInCart,
  removeCoffeeFromCart,
  confirmCoffeOrder,
} from '~/reducers/coffee/actions'
import {
  CoffeId,
  Coffee,
  coffeeReducer,
  coffeInitialState,
} from '~/reducers/coffee/reducer'

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
  const [coffeState, dispatch] = useReducer(coffeeReducer, coffeInitialState)
  const { coffees, order } = coffeState

  // const [cartItems, setCartItems] = useState<Coffee[]>([])
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
  // console.log('Context:', coffees)
  // const [order, setOrder] = useState<Order>({
  //   deliveryTime: '20 min - 30 min',
  //   deliveryTo: {
  //     zipcode: '',
  //     street: '',
  //     addressNumber: '',
  //     complement: '',
  //     neighborhood: '',
  //     city: '',
  //     state: '',
  //     paymentType: '',
  //   },
  // })

  function addCoffee(coffee: Coffee) {
    // const alreadyInCart = cartItems.find((item) => item.id === coffee.id)

    // if (!alreadyInCart) {
    //   setCartItems((prev) => [...prev, coffee])
    // } else {
    //   setCartItems((prev) => {
    //     return prev.map((item) =>
    //       item.id === coffee.id
    //         ? { ...item, quantity: coffee.quantity }
    //         : { ...item },
    //     )
    //   })
    // }
    console.log('addCoffee: ', coffee)
    dispatch(addCoffeeInCart(coffee))
  }

  function removeCoffee(coffeId: CoffeId) {
    // setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== coffeId))
    dispatch(removeCoffeeFromCart(coffeId))
  }

  function confirmOrder(data: DeliveryFormData) {
    // setOrder((prev) => {
    //   return {
    //     ...prev,
    //     deliveryTo: data,
    //   }
    // })
    dispatch(confirmCoffeOrder(data))
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartItems: coffees,
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
