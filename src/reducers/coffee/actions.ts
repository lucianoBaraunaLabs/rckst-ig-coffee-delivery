import { DeliveryFormData } from '~/pages/Checkout'
import { CoffeId, ChangeCoffeeItemQuantity, AddCoffeeInCart } from './types'

/* eslint-disable no-unused-vars */
export enum ActionsTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CHANGE_COFFEE_QUANTITY = 'CHANGE_COFFEE_QUANTITY',
  CONFIRM_COFFEE_ORDER = 'CONFIRM_COFFEE_ORDER',
  CLEAR_CART = 'CLEAR_CART',
}
/* eslint-enable no-unused-vars */

export function addCoffeeInCartAction(coffee: AddCoffeeInCart) {
  return {
    type: ActionsTypes.ADD_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeFromCartAction(coffeId: CoffeId) {
  return {
    type: ActionsTypes.REMOVE_COFFEE,
    payload: {
      coffeId,
    },
  }
}

export function changeCoffeQuantityAction({
  coffee,
  typeChange,
}: ChangeCoffeeItemQuantity) {
  return {
    type: ActionsTypes.CHANGE_COFFEE_QUANTITY,
    payload: {
      coffee,
      typeChange,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionsTypes.CLEAR_CART,
  }
}

export function confirmCoffeOrderAction(dataOrder: DeliveryFormData) {
  return {
    type: ActionsTypes.CONFIRM_COFFEE_ORDER,
    payload: {
      dataOrder,
    },
  }
}
