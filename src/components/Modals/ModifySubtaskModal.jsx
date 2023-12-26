import { useEffect, useState } from "react";
import { CloseIcon } from "../../assets/svg";
import { Loader } from "../../utils";
import { useModal } from "../../contexts/ModalContext/ModalContext";

const ModifySubtaskModal = () => {
  const [isLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [activeField, setActiveField] = useState(0);
  const onFocus = (num) => setActiveField(num);
  const onBlur = () => setActiveField(0);
  const { currentTask, openSubtaskModal, setOpenSubtaskModal } = useModal();
  const currentSubTask =
    selectedId &&
    currentTask.subTasks.filter((curr) => curr._id === selectedId);
  const [renameSubtask, setRenameSubtask] = useState("");

  useEffect(() => {
    Boolean(currentSubTask) && setRenameSubtask(currentSubTask[0].todo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  if (!openSubtaskModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">
              Modify this task subtasks
            </h2>
            <button onClick={() => setOpenSubtaskModal(!openSubtaskModal)}>
              <CloseIcon />
            </button>
          </div>
          <div className="space-y-5 w-[100%] mt-5">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="selectedSubtask">Select a subtask</label>
              <select
                id="selectSubtask"
                name="subtasks"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className={`rounded-[6px] p-4 outline-none text-grey-500 transition duration-200 border ${
                  activeField === 0 ? "border-primary" : "border-grey-300"
                }`}
              >
                <option value="">Select Subtask</option>
                {currentTask.subTasks.map((task) => (
                  <option key={task._id} value={task._id}>
                    {task.todo}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full h-[1px] bg-grey-300"></div>
            <form>
              <div className="flex flex-col">
                <label htmlFor="title" className="flex flex-col w-full">
                  <span className="mb-1">Edit subtask</span>
                  <div
                    className={`flex gap-3 w-full rounded-[6px] p-4 transition duration-200 border ${
                      activeField === 1 ? "border-primary" : "border-grey-300"
                    }`}
                  >
                    <input
                      onFocus={() => onFocus(1)}
                      onBlur={onBlur}
                      type="text"
                      id="title"
                      name="title"
                      value={renameSubtask}
                      onChange={(e) => setRenameSubtask(e.target.value)}
                      placeholder="E.g Make dinner today by 5pm"
                      className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                    />
                  </div>
                </label>
              </div>
              <div className="flex justify-end items-center mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
                >
                  {isLoading ? <Loader /> : "Save"}
                </button>
              </div>
            </form>
            <div className="w-full h-[1px] bg-grey-300"></div>
            <form>
              <div className="flex flex-col">
                <label htmlFor="title" className="flex flex-col w-full">
                  <span className="mb-1">Delete subtask</span>
                  <div
                    className={`flex gap-3 w-full rounded-[6px] p-4 transition duration-200 border border-grey-300`}
                  >
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={renameSubtask}
                      disabled={true}
                      placeholder="E.g Make dinner today by 5pm"
                      className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                    />
                  </div>
                </label>
              </div>
              <div className="flex justify-end items-center mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
                >
                  {isLoading ? <Loader /> : "Delete"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifySubtaskModal;
