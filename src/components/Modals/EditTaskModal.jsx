import { useState } from 'react';
import { CloseIcon } from '../../assets/svg';
import { Loader } from '../../utils';
import { useModal } from '../../contexts/ModalContext/ModalContext';
import { builder } from '../../api/builder';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const EditTaskModal = ({taskId, taskTitle}) => {
  const queryClient = useQueryClient();
  const {openEditModal, setOpenEditModal} = useModal();
  const [activeField, setActiveField] = useState(0);
  const onFocus = (num) => setActiveField(num);
  const onBlur = () => setActiveField(0);
  const [renameTask, setRenameTask] = useState(taskTitle);

  // Change Title
  const { mutate: changeTitle, isPending: isChangingTitle } = useMutation({
    mutationFn: builder.use().task.change_task_title,
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries(builder.task.get_tasks.get());
    },
    onError(err) {
      console.log("Error while changing task title:", err);
      // toast.error("invalid input");
    },
  });

  if (!openEditModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">
              Update this task title
            </h2>
            <button onClick={() => setOpenEditModal(!openEditModal)}>
              <CloseIcon />
            </button>
          </div>
          <form
            className="space-y-5 my-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              changeTitle({taskId, title: renameTask})
            }}
          >
            <div className="flex flex-col">
                <label htmlFor="title" className="flex flex-col w-full">
                  <span className="mb-1">Edit task title</span>
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
                      value={renameTask}
                      onChange={(e) => setRenameTask(e.target.value)}
                      placeholder="E.g Make dinner today by 5pm"
                      className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                    />
                  </div>
                </label>
              </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isChangingTitle}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isChangingTitle ? <Loader /> : "Update Title"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
