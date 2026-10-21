import type { CartItem } from './cartItem'

export enum PurchasedStatus {
  approved = 'Approved',
  declined = 'Declined',
}

export interface Purchased {
  id: string
  userId: string
  items: CartItem[]
  totalPrice: number
  status: PurchasedStatus
  createdAt: string
}
