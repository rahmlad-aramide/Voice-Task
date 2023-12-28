import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "../../api/builder";
import { CloseIcon } from "../../assets/svg";
import { useModal } from "../../contexts/ModalContext/ModalContext";
// import { useMutationContext } from "../../contexts/MutationContext/MutationContext";
import { Loader } from "../../utils";
import { error, notify } from "../../utils/toast";

// eslint-disable-next-line react/prop-types
const CompleteModal = () => {
  const queryClient = useQueryClient();
  const { currentTask, openCompleteModal, setOpenCompleteModal } = useModal();

  // Change Task Status
  const { mutate: changeTaskStatus, isPending: isChangingTaskStatus } =
    useMutation({
      mutationFn: builder.use().task.change_task_status,
      onSuccess(data) {
        console.log(data);
        queryClient.invalidateQueries(builder.task.get_tasks.get());
        setOpenCompleteModal(!openCompleteModal);
        notify("Marked task as completed");
      },
      onError(err) {
        console.log("Error while changing task status:", err);
        error(`An error has occured ${err?.response?.data.message}`);
      },
    });

  if (!openCompleteModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black/30 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-end">
            <button onClick={() => setOpenCompleteModal(!openCompleteModal)}>
              <CloseIcon />
            </button>
          </div>
          <form
            className="space-y-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              changeTaskStatus(currentTask._id);
            }}
          >
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col w-full mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-xl leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {currentTask.completed? "Unmark" :'Mark'} task as completed
                </h3>
                <div className="mt-5">
                  <div>
                    Are you sure you want to {currentTask.completed? "unmark" :'mark'} the task: &lsquo;
                    {currentTask.title}&rsquo; as completed?
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isChangingTaskStatus}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isChangingTaskStatus ? <Loader /> : "Yes, sure"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteModal;
