import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { builder } from '/src/api/builder'
import { Loader } from '../../utils';


const defaultFormFields = {
  title: '',
  description: ''
};

const AddBar = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description } = formFields;

  const queryClient = useQueryClient()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  // use case of useMutation
  const { mutate, isPending } = useMutation({
    mutationFn: builder.use().task.create_task,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
      // toast.success("login successful");
      // cookieStorage.setItem("my-user", JSON.stringify(data.data));
      resetFormFields();
    },
    onError(err) {
      console.log("Error while adding task:",err);
      // toast.error("invalid input");
    },
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      mutate(formFields)
    }} className="bg-[#e8b8ff19] p-6">
      <div className="mb-6">
        <input type="text" placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
          className="text-[#033835e5] placeholder:text-[#033835e5] w-full py-1 bg-transparent border-b border-transparent focus:border-primary outline-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          placeholder="description"
          rows="3"
          name="description"
          value={description}
          onChange={handleChange}
          className="text-[#033835b2] placeholder:text-[#033835b2] border-b border-dashed bg-transparent focus:border-primary outline-none w-full resize-none"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clipPath="url(#clip0_7_86)">
                <path d="M12 1.5C11.2044 1.5 10.4413 1.81607 9.87868 2.37868C9.31607 2.94129 9 3.70435 9 4.5V12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5V4.5C15 3.70435 14.6839 2.94129 14.1213 2.37868C13.5587 1.81607 12.7956 1.5 12 1.5Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 10.5V12.5C19 14.3565 18.2625 16.137 16.9497 17.4497C15.637 18.7625 13.8565 19.5 12 19.5C10.1435 19.5 8.36301 18.7625 7.05025 17.4497C5.7375 16.137 5 14.3565 5 12.5V10.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19.5V23.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 23.5H16" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_7_86">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M19 3.5H5C3.89543 3.5 3 4.39543 3 5.5V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V5.5C21 4.39543 20.1046 3.5 19 3.5Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 10.5C9.32843 10.5 10 9.82843 10 9C10 8.17157 9.32843 7.5 8.5 7.5C7.67157 7.5 7 8.17157 7 9C7 9.82843 7.67157 10.5 8.5 10.5Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 15.5L16 10.5L5 21.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H5C3.93913 15.5 2.92172 15.9214 2.17157 16.6716C1.42143 17.4217 1 18.4391 1 19.5V21.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 11.5C10.7091 11.5 12.5 9.70914 12.5 7.5C12.5 5.29086 10.7091 3.5 8.5 3.5C6.29086 3.5 4.5 5.29086 4.5 7.5C4.5 9.70914 6.29086 11.5 8.5 11.5Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 8.5V14.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 11.5H17" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div>
          <button type="submit" disabled={isPending} className="bg-[#e8b8ff99] py-1 px-2 transition duration-200 hover:scale-90 active:scale-100">
            {isPending ? <Loader color={'#033835'} /> : "Add Task"}
          </button>
        </div>
      </div>
    </form>
  )
}
export default AddBar