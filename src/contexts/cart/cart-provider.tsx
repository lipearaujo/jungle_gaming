import type { CartContextType } from '#/types/cartContext'
import { useEffect, useState } from 'react'
import { CartContext } from './cart-context'
import type { CartItem } from '#/types/cartItem'
import type INfts from '#/types/nfts'

type Props = {
  children: React.ReactNode
}

const CartProvider = ({ children }: Props) => {
  const getInitialState = (): CartItem[] => {
    const storedItems = window.localStorage.getItem('cartItems')

    if (!storedItems) return []

    try {
      return JSON.parse(storedItems) as CartItem[]
    } catch {
      return []
    }
  }

  const [items, setItems] = useState<CartItem[]>(getInitialState)

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(items))
  }, [items])

  const addItem = (nft: INfts, quantity: number = 1) => {
    if (!Number.isInteger(quantity) || quantity < 1) return

    setItems((prev) => {
      const verifyItem = prev.find((item) => item.id === nft.id)

      if (verifyItem) {
        return prev.map((item) =>
          item.id === nft.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      } else {
        return [
          ...prev,
          {
            id: nft.id,
            name: nft.name,
            price: nft.price,
            imageUrl: nft.imageUrl,
            quantity,
          },
        ]
      }
    })
  }

  const incrementItem = (nftId: string) => {
    setItems((prev) => {
      const verifyItem = prev.find((item) => item.id === nftId)

      if (!verifyItem) return prev

      return prev.map((item) =>
        item.id === nftId ? { ...item, quantity: item.quantity + 1 } : item,
      )
    })
  }

  const decrementItem = (nftId: string) => {
    setItems((prev) => {
      const verifyItem = prev.find((item) => item.id === nftId)

      if (verifyItem?.quantity === 1)
        return prev.filter((item) => item.id !== nftId)

      if (!verifyItem) return prev

      return prev.map((item) =>
        item.id === nftId ? { ...item, quantity: item.quantity - 1 } : item,
      )
    })
  }

  const removeItem = (nftId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== nftId))
  }

  const totalItems = items.reduce((accumulator, item) => {
    return accumulator + item.quantity
  }, 0)

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + Number(item.price) * item.quantity
  }, 0)

  const clearCart = () => {
    setItems([])
  }

  const value: CartContextType = {
    items,
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
    totalItems,
    totalPrice,
    clearCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
