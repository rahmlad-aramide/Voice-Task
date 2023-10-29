import { Link, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar'

const Navbar = () => {
  
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex justify-between w-[90%] max-w-[1024px] mx-auto pt-5 pb-2">
          <Link to="/">
            <div className="text-primary text-[26px] font-medium font-Aeonik">Voice Task</div>
          </Link>
          <div className='hidden sm:flex'>
            <SearchBar />
          </div>
          <div className="flex">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M33.3334 35V31.6667C33.3334 29.8986 32.631 28.2029 31.3807 26.9526C30.1305 25.7024 28.4348 25 26.6667 25H13.3334C11.5652 25 9.86955 25.7024 8.61931 26.9526C7.36907 28.2029 6.66669 29.8986 6.66669 31.6667V35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 18.3333C23.6819 18.3333 26.6666 15.3486 26.6666 11.6667C26.6666 7.98477 23.6819 5 20 5C16.3181 5 13.3333 7.98477 13.3333 11.6667C13.3333 15.3486 16.3181 18.3333 20 18.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className='ml-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30 13.3334C30 10.6812 28.9464 8.13767 27.0711 6.26231C25.1957 4.38694 22.6522 3.33337 20 3.33337C17.3478 3.33337 14.8043 4.38694 12.9289 6.26231C11.0536 8.13767 10 10.6812 10 13.3334C10 25 5 28.3334 5 28.3334H35C35 28.3334 30 25 30 13.3334Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.8833 35C22.5903 35.5051 22.1697 35.9244 21.6637 36.2159C21.1577 36.5073 20.584 36.6608 20 36.6608C19.416 36.6608 18.8423 36.5073 18.3363 36.2159C17.8303 35.9244 17.4097 35.5051 17.1167 35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className='w-[80%] mx-auto mt-4 sm:hidden'>
          <SearchBar />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar