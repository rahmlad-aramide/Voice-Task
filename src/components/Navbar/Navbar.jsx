import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../assets/logo.png";
import icon from "../../assets/favicon.png";
import UserPopover from "../MorePopover/UserPopover";
import NotificationPopover from "../MorePopover/NotificationPopover";
import { cookieStorage } from "@ibnlanre/portal";

const Navbar = () => {
  const location = window.location.pathname;
  const token = cookieStorage.getItem("token");

  return (
    <div className="flex flex-col">
      <div className="pb-5">
        <div className="flex justify-between w-[90%] max-w-[1200px] mx-auto pt-5 pb-2">
          <Link to="/">
            <img src={logo} alt="Voice Task" className="hidden sm:flex h-14" />
            <img src={icon} alt="Voice Task" className="flex sm:hidden w-10" />
          </Link>
          {location !== "/" && (
            <div className="hidden sm:flex">
              <SearchBar />
            </div>
          )}
          <div className="flex gap-5">
            <UserPopover />
            {token && <NotificationPopover />}
          </div>
        </div>
        {location !== "/" && (
          <div className="w-[80%] mx-auto mt-4 sm:hidden">
            <SearchBar />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
