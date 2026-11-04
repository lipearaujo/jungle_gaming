import { MobileFilterContext } from '#/contexts/filter/mobile-filter-context'
import { useContext } from 'react'

const useMobileFilter = () => {
  const mobileFilter = useContext(MobileFilterContext)

  if (mobileFilter === undefined)
    throw new Error('useCart must be used within a CartProvider')

  return mobileFilter
}

export default useMobileFilter
