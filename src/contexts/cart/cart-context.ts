import type { CartContextType } from '#/types/cartContext'
import { createContext } from 'react'

export const CartContext = createContext<CartContextType | undefined>(undefined)
