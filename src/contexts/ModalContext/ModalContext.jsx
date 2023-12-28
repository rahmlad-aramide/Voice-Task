import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [openSubtaskModal, setOpenSubtaskModal] = useState(false);
  const [openAddSubtaskModal, setOpenAddSubtaskModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        currentTask,
        setCurrentTask,
        openModal,
        setOpenModal,
        openEditModal,
        setOpenEditModal,
        openSubtaskModal,
        setOpenSubtaskModal,
        openCompleteModal,
        setOpenCompleteModal,
        openDeleteModal,
        setOpenDeleteModal,
        openAddSubtaskModal,
        setOpenAddSubtaskModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
