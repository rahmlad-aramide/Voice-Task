import { cookieStorage } from "@ibnlanre/portal";
import { Link, useNavigate } from "react-router-dom";
import VimeoPlayer from "../../components/VimeoPlayer/VimeoPlayer";
import logo from "../../assets/logo.png";
import icon from "../../assets/favicon.png";
import PointingArrow from "../../assets/icons/arrow.svg";

const Home = () => {
  const navigate = useNavigate();
  const token = cookieStorage.getItem("token");
  return (
    <div className="flex h-[calc(100vh_-_90px)] items-center justify-center">
      <div className="flex flex-col md:flex-row gap-5 w-[95%] max-w-[1200px] mx-auto text-center">
        <div className="w-[90%] md:w-1/2 mx-auto">
          <img
            src={logo}
            alt="Voice Task"
            className="-ml-2 mb-4 flex md:hidden"
          />
          <img
            src={icon}
            alt="Voice Task"
            className="mb-4 mx-auto h-28 hidden md:flex"
          />
          <h1 className="mb-4 text-5xl font-bold text-grey-900/90 text-center md:text-left">
            Welcome to Voice Task.
          </h1>
          <p className="mb-8 px-4 md:pl-0 text-lg font-medium text-center md:text-left text-grey-700">
            With Voice Task, you can forget about typing, simply speak your
            tasks into existence. Voice Task leverages cutting-edge speech
            recognition technology to transcribe your spoken words into
            actionable tasks.
          </p>
          <div className="flex justify-center md:justify-start mt-8 gap-4">
            {token ? (
              <Link to="/dashboard">
                <button className="bg-primary text-white rounded py-2 px-4 sm:px-8 transition duration-200 hover:bg-purple-600 active:scale-100">
                  Go to Dashboard
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="bg-primary border border-primary text-white rounded py-2 px-4 sm:px-8 transition duration-200 hover:bg-purple-600 active:scale-100"
              >
                Get Started
              </button>
            )}
            <div className="relative">
              <button className="group bg-transparent border border-primary text-primary rounded py-2 px-4 sm:px-8 transition duration-200">
                See Demo
              </button>
              <img
                src={PointingArrow}
                alt=""
                className="z-10 absolute left-16 w-16 md:w-full md:left-36 -top-10 md:-top-14 transition duration-200 animate-bounce-mobile md:animate-bounce"
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] my-12 md:my-auto mx-auto md:w-1/2">
          <VimeoPlayer />
        </div>
      </div>
    </div>
  );
};

export default Home;
