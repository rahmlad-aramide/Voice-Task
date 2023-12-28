import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { builder } from "../../api/builder";
import { useModal } from "../ModalContext/ModalContext";
import { error, notify, warn } from "../../utils/toast";

export const MutationContext = createContext();

const MutationProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const { openDeleteModal, setOpenDeleteModal } = useModal();

  // Fetch data from the backend
  const { data: fetchedData, isPending: isFetchingData } = useQuery({
    queryFn: () => builder.use().task.get_tasks(),
    queryKey: builder.task.get_tasks.get(),
    select: ({ data }) => data?.tasks,
    onError(err) {
      warn(`Unable to get your tasks ${err}`);
    },
  });

  // Delete Task
  const { mutate: deleteTask, isPending: isDeletingTask } = useMutation({
    mutationFn: builder.use().task.delete_task,
    onSuccess() {
      queryClient.invalidateQueries(builder.task.get_tasks.get());
      setOpenDeleteModal(!openDeleteModal);
      notify("Task deleted successfully");
    },
    onError(err) {
      console.log("Error while deleting task:", err);
      error(`An error has occured ${err?.response?.data.message}`);
    },
  });

  return (
    <MutationContext.Provider
      value={{
        fetchedData,
        isFetchingData,
        deleteTask,
        isDeletingTask,
      }}
    >
      {children}
    </MutationContext.Provider>
  );
};
export default MutationProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMutationContext = () => useContext(MutationContext);
