import React from 'react'

const FilterContext = React.createContext()

function FilterProvider({children}) {
  const [stylesSelected, setStyles] = React.useState([])
  const [deliveredTimeSelected, setDeliveredTime] = React.useState([])

  const value = {
    stylesSelected,
    deliveredTimeSelected,
    setStyles,
    setDeliveredTime
  }
  return (
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
  )
}

function useFilter() {
  const context = React.useContext(FilterContext)
  if (context === undefined) {
    throw new Error(`useFilter must be used within a FilterProvider`)
  }
  return context
}

export {
  FilterProvider,
  useFilter
}
