import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { builder } from "../../api/builder";
import { useModal } from "../ModalContext/ModalContext";
import { notify, warn } from "../../utils/toast";

export const MutationContext = createContext();

const MutationProvider = ({ children }) => {
    const queryClient = useQueryClient();
    const {openDeleteModal, setOpenDeleteModal} = useModal();

    // Fetch data from the backend   
    const { data: fetchedData, isPending: isFetchingData } = useQuery({
      queryFn: () => builder.use().task.get_tasks(),
      queryKey: builder.task.get_tasks.get(),
      select: ({ data }) => data?.tasks,
    });

    // Change Priority
    const { mutate: changePriority, isPending: isChangingPriority } = useMutation(
      {
        mutationFn: builder.use().task.change_task_priority,
        onSuccess(data) {
          console.log(data);
          queryClient.invalidateQueries(builder.task.get_tasks.get());
        },
        onError(err) {
          console.log("Error while changing task status:", err);
          // toast.error("invalid input");
        },
      }
    );

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

    // Delete Task
    const { mutate: deleteTask, isPending: isDeletingTask } = useMutation({
      mutationFn: builder.use().task.delete_task,
      onSuccess() {
          queryClient.invalidateQueries(builder.task.get_tasks.get());
          setOpenDeleteModal(!openDeleteModal)
          notify("Task deleted successfully")
      },
      onError(err) {
        console.log("Error while deleting task:", err);
        warn(`An error has occured ${err}`)
      },
    });


  return (
    <MutationContext.Provider
      value={{
        fetchedData, isFetchingData,
        changePriority, isChangingPriority,
        changeTitle, isChangingTitle,
        deleteTask, isDeletingTask
      }}
    >
      {children}
    </MutationContext.Provider>
  );
};
export default MutationProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMutationContext = () => useContext(MutationContext);
