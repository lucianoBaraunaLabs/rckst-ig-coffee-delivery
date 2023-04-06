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

export interface Order {
  deliveryTo: DeliveryFormData
  deliveryTime: string
  deliverValue: number
}

export interface CoffeeState {
  coffees: Coffee[]
  order: Order
}

export type AddCoffeeInCart = Coffee

export type ChangeItemQuantity = 'increase' | 'decrease'

export interface ChangeCoffeeItemQuantity {
  coffee: Coffee
  typeChange: 'increase' | 'decrease'
}
