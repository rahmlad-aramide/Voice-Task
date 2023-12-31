import { useSearch } from "../../contexts/SearchContext/SearchContext"

// eslint-disable-next-line react/prop-types
const SearchBar = () => {
  const { searchValue, handleSearchChange } = useSearch();

  return (
    <div className="flex items-center bg-[#F0ECEC] py-1 px-2 w-full max-w-[400px] mx-auto rounded-lg">
      <svg className="pr-1 !w-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#033835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 17.5L13.875 13.875" stroke="#033835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input name="search" type="search" placeholder="Search..." value={searchValue} onChange={handleSearchChange} className="border-none outline-none bg-transparent flex w-full md:min-w-[360px]" />
    </div>
  )
}

export default SearchBar