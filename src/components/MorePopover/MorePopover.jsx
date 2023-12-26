import { useEffect } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import {
  AddCollaboratorIcon,
  AddImageIcon,
  ChangePriorityIcon,
  MoreIcon,
  PencilIcon,
  PlusIconSmall,
} from "../../assets/svg";
import { useModal } from "../../contexts/ModalContext/ModalContext";

const MorePopover = ({ completed, openMore, setOpenMore, task }) => {
  const {
    setCurrentTask,
    openSubtaskModal,
    setOpenSubtaskModal,
    openEditModal,
    setOpenEditModal,
    openAddSubtaskModal,
    setOpenAddSubtaskModal,
  } = useModal();

  useEffect(() => {
    setCurrentTask(task);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popover
      isOpen={openMore}
      positions={["right", "top", "bottom", "left"]}
      padding={5}
      onClickOutside={() => setOpenMore(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={10}
          arrowStyle={{ opacity: 1 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div className="w-full max-w-[178px] rounded-[5px] shadow-xl bg-white p-3">
          <button
            onClick={() => {
              setOpenAddSubtaskModal(!openAddSubtaskModal);
            }}
            className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1"
          >
            <PlusIconSmall />
            <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
              Add Subtask
            </div>
          </button>
          <button
            onClick={() => {
              setOpenEditModal(!openEditModal);
            }}
            className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1"
          >
            <PencilIcon />
            <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
              Edit Task Title
            </div>
          </button>
          <button
            onClick={() => {
              setOpenSubtaskModal(!openSubtaskModal);
            }}
            className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1"
          >
            <ChangePriorityIcon />
            <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
              Modify Substasks
            </div>
          </button>
          <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
            <AddImageIcon />
            <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
              Add Image
            </div>
          </button>
          <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
            <AddCollaboratorIcon />
            <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
              Add Collaborator
            </div>
          </button>
        </div>
        </ArrowContainer>
      )}
    >
      <button disabled={completed} onClick={() => setOpenMore(!openMore)}>
        <MoreIcon />
      </button>
    </Popover>
  );
};

export default MorePopover;
