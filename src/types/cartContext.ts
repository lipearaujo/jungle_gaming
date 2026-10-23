import type { CartItem } from './cartItem'
import type INfts from './nfts'

export interface CartContextType {
  items: CartItem[]
  addItem: (nft: INfts, quantity?: number) => void
  incrementItem: (nftId: string) => void
  decrementItem: (nftId: string) => void
  removeItem: (nftId: string) => void
  totalItems: number
  totalPrice: number
  clearCart: () => void
}
