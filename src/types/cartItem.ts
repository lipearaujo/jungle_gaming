import type { Edition, Network } from './nfts'

export interface CartItem {
  id: string
  name: string
  price: string
  imageUrl: string
  quantity: number
  network: Network
  edition: Edition
}
