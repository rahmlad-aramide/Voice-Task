import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }

  const value={
    searchValue,
    handleSearchChange
  }
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch =() => useContext(SearchContext)
export default SearchContextProvider;