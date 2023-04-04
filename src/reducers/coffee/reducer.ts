import { DeliveryFormData } from '~/pages/Checkout'
import { ActionsTypes } from './actions'
import { produce } from 'immer'

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

export interface Order {
  deliveryTo: DeliveryFormData
  deliveryTime: string
  // Colocar aqui depois o delivrey value. Remover do context
}

export interface CoffeeState {
  coffees: Coffee[]
  order: Order
}

export const coffeInitialState = {
  coffees: [],
  order: {
    deliveryTime: '20 min - 30 min',
    deliveryTo: {
      zipcode: '',
      street: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentType: '',
    },
  },
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    // 1 opcao
    // case ActionsTypes.ADD_COFFEE: {
    //   const alreadyInCart = state.coffees.findIndex(
    //     (item) => item.id === action.payload.coffee.id,
    //   )

    //   return produce(state, (draft) => {
    //     if (alreadyInCart !== -1) {
    //       draft.coffees[alreadyInCart] = {
    //         ...draft.coffees[alreadyInCart],
    //         quantity: action.payload.coffee.quantity,
    //       }
    //     } else {
    //       draft.coffees.push(action.payload.coffee)
    //     }
    //   })
    // }
    // 2 opcao
    // case ActionsTypes.ADD_COFFEE: {
    //   const currentCoffeIndex = state.coffees.findIndex(
    //     (item) => item.id === action.payload.coffee.id,
    //   )

    //   return produce(state, (draft) => {
    //     if (currentCoffeIndex !== -1) {
    //       draft.coffees[currentCoffeIndex].quantity =
    //         action.payload.coffee.quantity
    //     } else {
    //       draft.coffees.push(action.payload.coffee)
    //     }
    //     console.log('Immer: ', draft.coffees[currentCoffeIndex])
    //   })
    // }

    case ActionsTypes.ADD_COFFEE: {
      const alreadyInCart = state.coffees.find(
        (item) => item.id === action.payload.coffee.id,
      )

      if (!alreadyInCart) {
        return {
          ...state,
          coffees: [...state.coffees, { ...action.payload.coffee }],
        }
      } else {
        const coffeesUpdatedQuantity = state.coffees.map((item) => {
          return item.id === action.payload.coffee.id
            ? {
                ...item,
                quantity: action.payload.coffee.quantity,
              }
            : { ...item }
        })
        return {
          ...state,
          coffees: coffeesUpdatedQuantity,
        }
      }
    }

    case ActionsTypes.REMOVE_COFFEE: {
      const coffees = state.coffees.filter(
        (cartItem) => cartItem.id !== action.payload.coffeId,
      )

      return produce(state, (draft) => {
        draft.coffees = coffees
      })
    }

    case ActionsTypes.CONFIRM_COFFEE_ORDER: {
      return produce(state, (draft) => {
        draft.order.deliveryTo = action.payload.dataOrder
      })
    }

    default:
      return state
  }
}
