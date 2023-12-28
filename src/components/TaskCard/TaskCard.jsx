import { useState } from "react";
import { AddSubtaskModal, DeleteModal, EditTaskModal, ModifyModal, MorePopover } from "..";
import { CheckMarkIcon, StarIcon, TrashCan } from "../../assets/svg";
import ModifySubtaskModal from "../Modals/ModifySubtaskModal";
import { useModal } from "../../contexts/ModalContext/ModalContext";
import { calculateProgressPercentage } from "../../utils/helper";
import CompleteModal from "../Modals/CompleteModal";

const TaskCard = ({ task }) => {
  const [openMore, setOpenMore] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const {setCurrentTask,openDeleteModal, setOpenDeleteModal, openCompleteModal, setOpenCompleteModal} = useModal();

  const progress = calculateProgressPercentage(task.subTasks)

  const handleStar = () => {
    setIsStarred(!isStarred);
  };

  const priorityColors = {
    high: "bg-[#FFECE5] text-[#F56630]",
    medium: "bg-yellow-100 text-yellow-500",
    low: "bg-[#E7F6EC] text-[#099137]",
    false: "bg-gray-400",
  };

  const SubTaskList = ({ subtask }) => {
    const [completed, setCompleted] = useState(false);

    return (
      <li className="flex">
        <input
          // disabled={isChangingTaskStatus}
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          id={subtask._id}
          name={"subtask"}
          className="mr-2 md:mr-4 cursor-pointer"
        />
        <label
          htmlFor={subtask._id}
          className="cursor-pointer text-sm text-grey-600"
        >
          {subtask.todo}
        </label>
      </li>
    );
  };

  return (
    <>
      <div className="flex flex-col space-y-3 md:space-y-5 py-4 md:py-8 px-3.5 md:px-7 shadow-soft rounded-[10px] border border-grey-50 bg-white">
        <div className="flex justify-between items-center">
          <div>{task?.title}</div>
          <div
            className={`${
              priorityColors[`${task.priority}`]
            } h-fit px-2 py-0.5 rounded-xl flex items-center text-xs font-medium`}
          >
            {task.priority}
          </div>
        </div>
        {task.subTasks && (
          <ul>
            {task.subTasks.length > 0
              ? task.subTasks.map((subtask) => (
                  <SubTaskList key={subtask._id} subtask={subtask} />
                ))
              : "No subtask added to this task yet"}
          </ul>
        )}
        <div className="h-[160px] w-full bg-gray-100 rounded-xl"></div>
        <div>
          <div className="h-[11px] w-full bg-grey-100 rounded-xl">
            <div
              style={{width: task.completed? '100%' :progress}}
              className={`bg-primary/70 h-full rounded-xl`}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <div className="text-grey-400 text-xs">Progress</div>
            <div className="text-grey-600 text-sm">{task.completed? '100%' :progress}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div className="flex items-center">
            <button
              className="mr-2"
              disabled={task?.completed}
              onClick={handleStar}
            >
              <StarIcon isStarred={isStarred} />
            </button>
            <button
              className="mr-2"
              disabled={task?.completed}
              onClick={()=>{setOpenCompleteModal(!openCompleteModal); setCurrentTask(task)}}
            >
              <CheckMarkIcon />
            </button>
            <button className="mr-2" onClick={()=>{setOpenDeleteModal(!openDeleteModal); setCurrentTask(task)}}>
              <TrashCan />
            </button>
            <MorePopover
              completed={task?.completed}
              openMore={openMore}
              setOpenMore={setOpenMore}
              task={task}
            />
          </div>
        </div>
      </div>
      <ModifySubtaskModal />
      <ModifyModal />
      <DeleteModal  />
      <EditTaskModal />
      <AddSubtaskModal />
      <CompleteModal />
    </>
  );
};
export default TaskCard;
