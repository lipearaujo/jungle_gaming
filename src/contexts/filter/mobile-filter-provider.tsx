import React, { useState } from 'react'
import { MobileFilterContext } from './mobile-filter-context'

type Props = {
  children: React.ReactNode
}

const MobileFilterProvider = ({ children }: Props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const value = {
    isFilterOpen,
    setIsFilterOpen,
  }

  return (
    <MobileFilterContext.Provider value={value}>
      {children}
    </MobileFilterContext.Provider>
  )
}

export default MobileFilterProvider
