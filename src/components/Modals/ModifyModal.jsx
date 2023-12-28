import { useState } from "react";
import { CloseIcon } from "../../assets/svg";
import { Loader } from "../../utils";
import { useModal } from "../../contexts/ModalContext/ModalContext";

const ModifyModal = () => {
  const [isLoading] = useState(false);
  const { openModal, setOpenModal } = useModal();

  if (!openModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black/30 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">
              Modify this task
            </h2>
            <button onClick={() => setOpenModal(!openModal)}>
              <CloseIcon />
            </button>
          </div>
          <form
            className="space-y-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-y-5"></div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isLoading ? <Loader /> : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyModal;
