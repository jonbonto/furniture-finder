import React from 'react'

const SearchContext = React.createContext()

function SearchProvider({children}) {
  const [search, setSearch] = React.useState("")

  const value = {
    search,
    setSearch
  }
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = React.useContext(SearchContext)
  if (context === undefined) {
    throw new Error(`useSearch must be used within a SearchProvider`)
  }
  return context
}

export {
  SearchProvider,
  useSearch
}
