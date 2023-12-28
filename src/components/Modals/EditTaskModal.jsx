import { useEffect, useState } from "react";
import { CloseIcon, Cloud, Document } from "../../assets/svg";
import { Loader } from "../../utils";
import { useModal } from "../../contexts/ModalContext/ModalContext";
import { builder } from "../../api/builder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error, inform, notify } from "../../utils/toast";
import { useDropzone } from "react-dropzone";
import { formatFileSize } from "../../utils/helper";
import DisplayErrorMessage from "../DisplayErrorMessage/DIsplayErrorMessage";

const EditTaskModal = () => {
  const { currentTask } = useModal();
  const queryClient = useQueryClient();
  const { openEditModal, setOpenEditModal } = useModal();
  const [activeField, setActiveField] = useState(0);
  const onFocus = (num) => setActiveField(num);
  const onBlur = () => setActiveField(0);
  const [renameTask, setRenameTask] = useState("");
  const [priority, setPriority] = useState("");
  const [isLoading] = useState(false);
  const [entering, setEntering] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onFileDialogCancel: () => setUploadedFile(null),
      onFileDialogOpen: () => setUploadedFile(null),
      onDragEnter: () => setEntering(true),
      onDragLeave: () => setEntering(false),
      maxFiles: 1,
      multiple: false,
      accept: {
        "image/png": [".png"],
        "image/jpg": [".jpg", ".jpeg"],
        "image/gif": [".gif"],
      },
      onDrop: (acceptedFiles) => {
        setActiveField(1);
        setEntering(false);
        setUploadedFile(acceptedFiles);
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
      <div key={file.path}>
        {file.path} - {formatFileSize(file.size)}
      </div>
    );
  });

  const fileRejectionItems = fileRejections.map(
    ({ errors }) => `${errors[0].message}`
  );

  // Change Title
  const { mutate: changeTitle, isPending: isChangingTitle } = useMutation({
    mutationFn: builder.use().task.change_task_title,
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries(builder.task.get_tasks.get());
      setOpenEditModal(!openEditModal);
      notify("Title title updated successfully");
    },
    onError(err) {
      console.log("Error while changing task title:", err);
      error(`An error has occured ${err?.response?.data.message}`);
    },
  });

  useEffect(() => {
    setRenameTask(currentTask?.title);
    setPriority(currentTask?.priority);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask]);

  // Change Priority
  const { mutate: changePriority, isPending: isChangingPriority } = useMutation(
    {
      mutationFn: builder.use().task.change_task_priority,
      onSuccess(data) {
        console.log(data);
        queryClient.invalidateQueries(builder.task.get_tasks.get());
        setOpenEditModal(!openEditModal);
        notify("Task priority updated successfully");
      },
      onError(err) {
        console.log("Error while changing task status:", err);
        error(`An error has occured ${err?.response?.data.message}`);
      },
    }
  );

  if (!openEditModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black/30 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col space-y-5">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">
              Update this task
            </h2>
            <button onClick={() => setOpenEditModal(!openEditModal)}>
              <CloseIcon />
            </button>
          </div>
          <form
            className="space-y-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              changeTitle({ taskId: currentTask._id, data: renameTask });
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
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isChangingTitle ? <Loader /> : "Update Title"}
              </button>
            </div>
          </form>
          <div className="w-full h-[1px] bg-grey-300"></div>
          <form
            className="space-y-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              inform("Sorry, this is a coming soon feature...");
            }}
          >
            <div className="flex flex-col gap-y-5">
              <div>
                <label>Add task image</label>
                <div
                  {...getRootProps()}
                  className={`cursor-pointer rounded-xl border-dashed border-[1.5px] transition duration-200 mt-1 ${
                    activeField === 3 ? "border-primary" : "border-grey-300"
                  }`}
                >
                  <div
                    className={`flex flex-col items-center py-7 px-6 rounded-lg ${
                      entering ? "bg-primary/10" : ""
                    }`}
                  >
                    {!uploadedFile ||
                    uploadedFile === null ||
                    uploadedFile.length === 0 ||
                    entering ? (
                      <div
                        className={`w-14 h-14 mb-4 bg-grey-100 rounded-full flex justify-center items-center ${
                          entering ? "animate-ping" : ""
                        }`}
                      >
                        <Cloud />
                      </div>
                    ) : (
                      <Document
                        type={uploadedFile ? uploadedFile[0].type : null}
                      />
                    )}
                    {!uploadedFile ||
                    uploadedFile === null ||
                    uploadedFile.length === 0 ? (
                      <div>
                        <h2 className="text-grey-600 text-sm text-center mb-0.5">
                          <span className="text-primary font-medium">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </h2>
                        <p className="text-grey-400 text-xs text-center">
                          PNG, JPG or GIF (File must not be larger than 10MB)
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {entering ? (
                      <div>
                        <h2 className="text-grey-600 text-sm text-center mb-0.5">
                          <span className="text-primary font-medium">
                            Drop it here
                          </span>{" "}
                        </h2>
                      </div>
                    ) : (
                      <div className="text-grey-600 text-sm mt-2 text-center">
                        {acceptedFileItems}
                      </div>
                    )}
                    <div className="flex items-center w-full text-grey-400 text-xs font-medium gap-x-2 my-4">
                      <div className="bg-grey-100 h-[1px] w-full"></div> OR{" "}
                      <div className="bg-grey-100 h-[1px] w-full"></div>
                    </div>
                    <button
                      type="button"
                      className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
                    >
                      {uploadedFile ? "Upload Another File" : " Browse Files"}
                    </button>
                  </div>
                  <input {...getInputProps()} />
                </div>
                {fileRejectionItems[0] === "Too many files" ? (
                  <DisplayErrorMessage errMessage="Can't upload multiple images." />
                ) : (
                  <DisplayErrorMessage errMessage={fileRejectionItems[0]} />
                )}
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isLoading ? <Loader /> : "Save Image"}
              </button>
            </div>
          </form>
          <div className="w-full h-[1px] bg-grey-300"></div>
          <form
            className="space-y-5 my-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              changePriority({ taskId: currentTask._id, data: priority });
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="priority" className="mb-1">
                Change task priority
              </label>
              <select
                id="priority"
                name="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                onFocus={() => onFocus(2)}
                onBlur={onBlur}
                className={`rounded-[6px] p-4 outline-none text-grey-500 transition duration-200 border ${
                  activeField === 2 ? "border-primary" : "border-grey-300"
                }`}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high"> High</option>
              </select>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isChangingPriority}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-grey-300 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isChangingPriority ? <Loader /> : "Update Priority"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
