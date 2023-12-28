import { useState } from "react";
import { CloseIcon } from "../../assets/svg";
import { Loader } from "../../utils";
import { useModal } from "../../contexts/ModalContext/ModalContext";
import { builder } from "../../api/builder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error, notify } from "../../utils/toast";

const AddSubtaskModal = () => {
  const queryClient = useQueryClient();
  const { currentTask, openAddSubtaskModal, setOpenAddSubtaskModal } =
    useModal();
  const [activeField, setActiveField] = useState(0);
  const onFocus = (num) => setActiveField(num);
  const onBlur = () => setActiveField(0);
  const [newTask, setNewTask] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: builder.use().task.add_subtask,
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries(builder.task.get_tasks.get());
      notify("Added subtask successfully");
      setOpenAddSubtaskModal(!openAddSubtaskModal);
    },
    onError(err) {
      console.log("Error while adding task:", err);
      error(`An error has occured ${err?.response?.data.message}`);
    },
  });

  if (!openAddSubtaskModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black/30 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">Add Subtask</h2>
            <button
              onClick={() => setOpenAddSubtaskModal(!openAddSubtaskModal)}
            >
              <CloseIcon />
            </button>
          </div>
          <form
            className="space-y-5 my-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              mutate({ taskId: currentTask._id, data: newTask });
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="title" className="flex flex-col w-full">
                <span className="mb-1">
                  Add a new subtask to the task: &lsquo;{currentTask.title}
                  &rsquo;
                </span>
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
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="E.g Make dinner today by 5pm"
                    className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                  />
                </div>
              </label>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isPending ? <Loader /> : "Add Subtask"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubtaskModal;
