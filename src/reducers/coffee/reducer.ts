import { ActionsTypes } from './actions'
import { produce } from 'immer'

import { CoffeeState } from './types'

export const coffeInitialState = {
  coffees: [],
  order: {
    deliveryTime: '20 min - 30 min',
    deliverValue: 3.9,
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
    case ActionsTypes.ADD_COFFEE: {
      const coffeeExistsInCart = state.coffees.findIndex(
        (cartItem) => cartItem.id === action.payload.coffee.id,
      )

      return produce(state, (draft) => {
        if (coffeeExistsInCart < 0) {
          draft.coffees.push({ ...action.payload.coffee })
        } else {
          draft.coffees[coffeeExistsInCart].quantity =
            action.payload.coffee.quantity
        }
      })
    }

    case ActionsTypes.REMOVE_COFFEE: {
      const coffeeExistsInCart = state.coffees.findIndex(
        (cartItem) => cartItem.id === action.payload.coffeId,
      )

      return produce(state, (draft) => {
        if (coffeeExistsInCart >= 0) {
          draft.coffees.splice(coffeeExistsInCart, 1)
        }
      })
    }

    case ActionsTypes.CHANGE_COFFEE_QUANTITY: {
      const coffeeExistsInCart = state.coffees.findIndex(
        (cartItem) => cartItem.id === action.payload.coffee.id,
      )

      return produce(state, (draft) => {
        if (coffeeExistsInCart >= 0) {
          const itemCoffee = draft.coffees[coffeeExistsInCart]

          if (itemCoffee.quantity) {
            draft.coffees[coffeeExistsInCart].quantity =
              action.payload.typeChange === 'increase'
                ? itemCoffee.quantity + 1
                : itemCoffee.quantity - 1
          }
        }
      })
    }

    case ActionsTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.coffees = []
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
