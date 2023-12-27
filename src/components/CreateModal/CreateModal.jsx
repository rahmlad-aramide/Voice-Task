import { useState } from "react";
import { Loader } from "../../utils";
import { Cloud, Document, Microphone, MultiLine } from "../../assets/svg";
import { useDropzone } from "react-dropzone";
import { formatFileSize } from "../../utils/helper";
import DisplayErrorMessage from "../DisplayErrorMessage/DIsplayErrorMessage";
import { notify, warn } from "../../utils/toast";
import { builder } from "../../api/builder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const defaultFormFields = {
  title: '',
  description: '',
  priority: 'low'
};

const CreateModal = ({ openModal, setOpenModal }) => {
  const queryClient = useQueryClient();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, priority } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const [multilineText, setMultilineText] = useState(false);
  const [entering, setEntering] = useState(false);
  const [activeField, setActiveField] = useState(0);
  const onFocus = (num) => setActiveField(num);
  const onBlur = () => setActiveField(0);
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
        setActiveField(3);
        setEntering(false);
        setUploadedFile(acceptedFiles);
        // Call your backend API endpoint to upload files
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

 // use 
 const { mutate: createTask, isPending: isCreatingTask } = useMutation({
  mutationFn: builder.use().task.create_task,
  onSuccess(data) {
    console.log(data)
    queryClient.invalidateQueries(builder.task.get_tasks.get())
    setOpenModal(!openModal)
    notify("Task created successfully.")
    resetFormFields();
  },
  onError(err) {
    console.log("Error while adding task:",err);
    warn(`An error has occured ${err}`)
  },
});

  if (!openModal) return;
  return (
    <div className="fixed top-0 left-0 w-full h-screen sm:h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#fff] w-[90%] max-w-[450px] mx-auto rounded-[10px] shadow-lg gap-y-5 p-6 sm:p-8 flex flex-col items-start h-fit max-h-[80vh] overflow-y-auto">
        <div className="bg-[#fff] w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-medium text-lg text-grey-900">
              Create new task
            </h2>
            <button onClick={() => setOpenModal(!openModal)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M8.226 6.5756C7.77039 6.11998 7.0317 6.11998 6.57608 6.5756C6.12047 7.03121 6.12047 7.7699 6.57608 8.22551L12.3508 14.0002L6.57608 19.7749C6.12047 20.2305 6.12047 20.9692 6.57608 21.4248C7.0317 21.8804 7.77039 21.8804 8.226 21.4248L14.0007 15.6501L19.7754 21.4248C20.231 21.8804 20.9697 21.8804 21.4253 21.4248C21.8809 20.9692 21.8809 20.2305 21.4253 19.7749L15.6506 14.0002L21.4253 8.22551C21.8809 7.7699 21.8809 7.03121 21.4253 6.5756C20.9697 6.11998 20.231 6.11998 19.7754 6.5756L14.0007 12.3503L8.226 6.5756Z"
                  fill="#98A2B3"
                />
              </svg>
            </button>
          </div>
          <form
            className="space-y-5 w-[100%]"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(formFields);
              createTask(formFields);
              // notify("Created");
              setTimeout(() => {
                setOpenModal(!openModal);
              }, 1000);
            }}
          >
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col justify-between items-center w-full">
                {/* <label htmlFor="title">Title</label> */}
              </div>
              <label htmlFor="title" className="flex flex-col w-full">
                <span className="mb-1">Title</span>
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
                    value={title}
                    onChange={handleChange}
                    placeholder="E.g Make dinner today by 5pm"
                    className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                  />
                  <Microphone />
                </div>
              </label>
              <label htmlFor="desc" className="flex flex-col w-full">
                <span className="mb-1">Description</span>
                <div
                  className={`flex gap-3 w-full rounded-[6px] p-4 transition duration-200 border ${
                    activeField === 2 ? "border-primary" : "border-grey-300"
                  }`}
                >
                  {!multilineText ? (
                    <input
                      onFocus={() => onFocus(2)}
                      onBlur={onBlur}
                      type="textarea"
                      id="desc"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="E.g I'll prepare pounded yam with melon soup"
                      className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                    />
                  ) : (
                    <textarea
                      onFocus={() => onFocus(2)}
                      onBlur={onBlur}
                      id="desc"
                      cols="30"
                      rows="5"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="E.g I'll prepare pounded yam with melon soup"
                      className="w-full outline-none placeholder:text-grey-400 text-grey-500"
                    ></textarea>
                  )}
                  <div className="flex justify-center h-6">
                    <MultiLine
                      className={"cursor-pointer p-0.5 mr-1"}
                      onClick={() => setMultilineText(!multilineText)}
                    />
                    <Microphone />
                  </div>
                </div>
              </label>
              <div>
                <div
                  {...getRootProps()}
                  className={`cursor-pointer rounded-xl border-dashed border-[1.5px] transition duration-200 ${
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
                      className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
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
              <div className="flex flex-col">
                <label htmlFor="priority" className="mb-1">
                  Set priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={handleChange}
                  onFocus={() => onFocus(4)}
                  onBlur={onBlur}
                  className={`rounded-[6px] p-4 outline-none text-grey-500 transition duration-200 border ${
                    activeField === 4 ? "border-primary" : "border-grey-300"
                  }`}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high"> High</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                disabled={isCreatingTask}
                className="flex items-center bg-primary hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-9 py-2 px-6 text-[#fff] text-sm font-medium rounded-lg"
              >
                {isCreatingTask ? <Loader /> : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
