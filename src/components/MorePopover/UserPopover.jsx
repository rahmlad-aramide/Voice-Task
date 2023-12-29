import { Popover, ArrowContainer } from "react-tiny-popover";
import { UserIcon } from "../../assets/svg";
import { useModal } from "../../contexts/ModalContext/ModalContext";
import login from "../../assets/icons/login.svg";
import logout from "../../assets/icons/logout.svg";
import { cookieStorage } from "@ibnlanre/portal";
import { notify } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const UserPopover = () => {
  const navigate = useNavigate();
  const { openProfile, setOpenProfile } = useModal();
  const token = cookieStorage.getItem('token');

  return (
    <Popover
      isOpen={openProfile}
      positions={["bottom", "left", "right", "top"]}
      padding={5}
      onClickOutside={() => setOpenProfile(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"#C13DFF"}
          arrowSize={10}
          arrowStyle={{ opacity: 0.5 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div className="w-full max-w-[178px] rounded-[5px] border shadow-xl bg-white p-3">
            {!token?
            <button
            onClick={() => {
                navigate("/login");
              }}
              className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] rounded"
            >
              <img src={login} alt="" className="mr-4" />
              <div className="text-xs text-secondary/80">Login</div>
            </button>:
            <button
            onClick={() => {
              cookieStorage.removeItem("token");
              notify("Logging out, we hope to see you soon!");
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }}
            className="group transition duration-200 flex items-center w-full p-2 hover:bg-red-500/20 rounded"
            >
              <img src={logout} alt="" className="mr-4" />
              <div className="text-xs text-red-500">Logout</div>
            </button>
            }
          </div>
        </ArrowContainer>
      )}
    >
      <button
        onClick={() => {
          setOpenProfile(!openProfile);
        }}
      >
        <UserIcon />
      </button>
    </Popover>
  );
};

export default UserPopover;
