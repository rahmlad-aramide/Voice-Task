import { Popover, ArrowContainer } from "react-tiny-popover";
import {
  NotificationBell,
} from "../../assets/svg";
import { useModal } from "../../contexts/ModalContext/ModalContext";

const NotificationPopover = () => {
  const {
    openNotification,
    setOpenNotification
  } = useModal();

  return (
    <Popover
      isOpen={openNotification}
      positions={["bottom", "left", "right", "top"]}
      padding={5}
      onClickOutside={() => setOpenNotification(false)}
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
          <div className="w-full max-w-[250px] rounded-[5px] border shadow-xl bg-white p-3 text-grey-600">
            You have no notification yet.
          </div>
        </ArrowContainer>
      )}
    >
      <button
        onClick={() => {
          setOpenNotification(!openNotification);
        }}
      >
        <NotificationBell />
      </button>
    </Popover>
  );
};

export default NotificationPopover;
