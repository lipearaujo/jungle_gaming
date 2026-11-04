import type { MobileFilterContextType } from '#/types/mobileFilterContext'
import { createContext } from 'react'

export const MobileFilterContext = createContext<
  MobileFilterContextType | undefined
>(undefined)
