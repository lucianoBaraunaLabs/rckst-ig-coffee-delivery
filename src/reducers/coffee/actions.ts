import { DeliveryFormData } from '~/pages/Checkout'
import { CoffeId, Coffee } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionsTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CONFIRM_COFFEE_ORDER = 'CONFIRM_COFFEE_ORDER',
}
/* eslint-enable no-unused-vars */

export function addCoffeeInCart(coffee: Coffee) {
  return {
    type: ActionsTypes.ADD_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeFromCart(coffeId: CoffeId) {
  return {
    type: ActionsTypes.REMOVE_COFFEE,
    payload: {
      coffeId,
    },
  }
}

export function confirmCoffeOrder(dataOrder: DeliveryFormData) {
  return {
    type: ActionsTypes.CONFIRM_COFFEE_ORDER,
    payload: {
      dataOrder,
    },
  }
}
