import { cookieStorage } from "@ibnlanre/portal";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/toast";
import { ToastContainer } from "react-toastify";
import VimeoPlayer from "../../components/VimeoPlayer/VimeoPlayer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center">
      <ToastContainer />
      <div className="max-w-lg text-center">
        <h1 className="mb-8 text-7xl font-extrabold text-primary">
          Voice Task
        </h1>
        <p className="mb-8 px-4 text-lg font-medium">
          Welcome to Voice Task brought to you by Microsoft Learn Student
          Ambassadors from Nigeria.
        </p>
        <VimeoPlayer />
        <div className="flex justify-center mt-8 gap-4">
          {/* <Link to="/dashboard">
            <button className="bg-[#e8b8ff] rounded py-1 px-2 transition duration-200 hover:scale-90 active:scale-100">
              See your Dashboard
            </button>
          </Link> */}
          <button onClick={()=>{
            cookieStorage.removeItem('token');
            notify("Logging out, we hope to see you soon!")
            setTimeout(()=>{
              navigate('/login')
            }, 2000)
          }} className="bg-[#e8b8ff] rounded py-1 px-2 transition duration-200 hover:scale-90 active:scale-100">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
