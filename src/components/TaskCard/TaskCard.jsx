/* eslint-disable react/prop-types */
import { useState } from 'react';
import Todos from './Todos';
import PriorityModal from './PriorityModal';
import TitleModal from './TitleModal';
import DeleteModal from './DeleteModal';
import { Loader } from '../../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { builder } from '../../api/builder';

// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, background, priority, taskTitle, subtasks, changeTaskStatus, isChangingTaskStatus, completed = false, changePriority, changeTitle, deleteTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [subtaskModal, setSubTaskModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newSubtask, setNewSubtask] = useState('');

  const queryClient = useQueryClient()
  const { mutate: addSubtask, isPending: isAddingSubtask } = useMutation({
    mutationFn: builder.use().task.add_subtask,
    onSettled: (data)=>console.log(data),
    onSuccess() {
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while adding subtask:", err);
      // toast.error("invalid input");
    },
  });

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleMore = () => {
    setOpenMore(!openMore)
  }
  const handleStar = () => {
    setIsStarred(!isStarred)
  }
  const handleSubTask = () => {
    setSubTaskModal(!subtaskModal)
  }
  const priorityColors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
    false: "bg-gray-400"
  }
  const handlePriorityModal = () => {
    setPriorityModal(!priorityModal)
  }
  const handleTitleModal = () => {
    setTitleModal(!titleModal)
  }
  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  return (
    <div className="flex flex-col py-3 px-4" style={{ backgroundColor: background }}>
      <div className="flex justify-between w-full">
        <div className='flex'>
          <div className="flex items-center">
            <div className={`w-2.5 h-2.5 rounded-full mr-2 ${!completed ? priorityColors[priority] : "bg-[#4a4a477f]"}`}></div>
            {/* <div className={completed ? `text-[#4a4a477f]` : `text-secondary`}>{priority}</div> */}
          </div>
          <div onClick={handleTitleModal} className={completed ? `text-[#4a4a477f]` : `text-secondary`}>
            {taskTitle}
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={handleOpen} className={`${completed ? `text-[#4a4a477f]` : "text-secondary"} ${isOpen ? "rotate-180" : ""} transition duration-200`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M6.5 9L12.5 15L18.5 9" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen &&
        <div className='flex flex-col pt-6 gap-3'>
          {subtasks?.length === 0 && "No subtask under this task yet!"}
          {subtasks?.map((t, index) => (
            <Todos key={index} id={t._id} completed={completed} done={completed ? true : t.completed} todo={t.todo} />
          ))}
          {subtaskModal &&
            <form 
              onSubmit={
                (e) => {
                  e.preventDefault();
                  addSubtask({
                    taskId: id, 
                    data: {"todo": newSubtask }
                  });
                  setNewSubtask('')
                  handleSubTask()
                }
              }
            className="flex">
              <input type='text' name="todo" value={newSubtask} onChange={(e) => setNewSubtask(e.target.value)} placeholder='Enter a new subtask here' className='px-1 w-[90%]' />
              <button type="submit"
                disabled={isAddingSubtask} className={`flex shrink-0 ml-2 rounded px-2 shadow active:scale-100 hover:scale-90 scale-100`} style={{ backgroundColor: background }}>
                {isAddingSubtask ? <Loader color={'#033835'} /> : "Add Subtask"}
              </button>
            </form>
          }
          {isAddingSubtask && <div className="flex text-gray-500"> <Loader color="#00000050" /> Adding new subtask...</div>}
          <div className="flex justify-between mt-3 px-1">
            <div>
              <button className={`mr-5 transition duration-200 ${subtaskModal && 'rotate-45'}`} onClick={handleSubTask}>
                <svg fill="#033835" fillOpacity="0.85" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="20px" viewBox="0 0 45.402 45.402"
                  xmlSpace="preserve">
                  <g>
                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                      c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                      c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                      c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                  </g>
                </svg>
              </button>
              <button className="mr-5" disabled={completed} onClick={handleStar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className={isStarred ? "fill-secondary" : "fill-none"}>
                  <path d="M10 1.66669L12.575 6.88335L18.3333 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85 17.5167L5.83333 11.7834L1.66667 7.72502L7.425 6.88335L10 1.66669Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className='mr-5' onClick={handleDeleteModal}>
                <svg fill="#33835" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="20px" viewBox="0 0 482.428 482.429"
                  xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                        c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                        h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                        C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                        C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                        c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                        c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                        V115.744z"/>
                      <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			                  c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                      <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			                  c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                      <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			                  c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                    </g>
                  </g>
                </svg>
              </button>
              <button disabled={isChangingTaskStatus} onClick={() => changeTaskStatus(id)}>
                <svg fill="#033835" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.855 27.855" xmlSpace="preserve">
                  <use xlinkHref="#task-status" />
                  <g>
                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027
                      L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7
                      c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z"/>
                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241
                      c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369
                      H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257
                      l-1.768,1.924L21.795,22.613L21.795,22.613z"/>
                  </g>
                </svg>
              </button>
            </div>
            <div className="relative">
              <button disabled={completed} onClick={handleMore}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {
                openMore &&
                <div className="w-full min-w-[175px] z-10 absolute right-0 md:left-0 rounded-[5px] shadow-md bg-white p-4">
                  <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                    <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M7.5 0.625C7.00272 0.625 6.52581 0.822544 6.17417 1.17417C5.82254 1.52581 5.625 2.00272 5.625 2.5V7.5C5.625 7.99728 5.82254 8.47419 6.17417 8.82583C6.52581 9.17746 7.00272 9.375 7.5 9.375C7.99728 9.375 8.47419 9.17746 8.82583 8.82583C9.17746 8.47419 9.375 7.99728 9.375 7.5V2.5C9.375 2.00272 9.17746 1.52581 8.82583 1.17417C8.47419 0.822544 7.99728 0.625 7.5 0.625Z" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M11.875 6.25V7.5C11.875 8.66032 11.4141 9.77312 10.5936 10.5936C9.77312 11.4141 8.66032 11.875 7.5 11.875C6.33968 11.875 5.22688 11.4141 4.40641 10.5936C3.58594 9.77312 3.125 8.66032 3.125 7.5V6.25" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M7.5 11.875V14.375" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M5 14.375H10" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                    </svg>
                    <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                      Add Voice
                    </div>
                  </button>
                  <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                    <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.875 1.875H3.125C2.43464 1.875 1.875 2.43464 1.875 3.125V11.875C1.875 12.5654 2.43464 13.125 3.125 13.125H11.875C12.5654 13.125 13.125 12.5654 13.125 11.875V3.125C13.125 2.43464 12.5654 1.875 11.875 1.875Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M5.3125 6.25C5.83027 6.25 6.25 5.83027 6.25 5.3125C6.25 4.79473 5.83027 4.375 5.3125 4.375C4.79473 4.375 4.375 4.79473 4.375 5.3125C4.375 5.83027 4.79473 6.25 5.3125 6.25Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M13.125 9.375L10 6.25L3.125 13.125" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                    </svg>
                    <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                      Add Image
                    </div>
                  </button>
                  <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                    <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M10 13.125V11.875C10 11.212 9.73661 10.5761 9.26777 10.1072C8.79893 9.63839 8.16304 9.375 7.5 9.375H3.125C2.46196 9.375 1.82607 9.63839 1.35723 10.1072C0.888392 10.5761 0.625 11.212 0.625 11.875V13.125" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M5.3125 6.875C6.69321 6.875 7.8125 5.75571 7.8125 4.375C7.8125 2.99429 6.69321 1.875 5.3125 1.875C3.93179 1.875 2.8125 2.99429 2.8125 4.375C2.8125 5.75571 3.93179 6.875 5.3125 6.875Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M12.5 5V8.75" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M14.375 6.875H10.625" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                    </svg>
                    <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                      Add Collaborator
                    </div>
                  </button>
                  <button onClick={handlePriorityModal} className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                    <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.875 13.125L7.5 10L3.125 13.125V3.125C3.125 2.79348 3.2567 2.47554 3.49112 2.24112C3.72554 2.0067 4.04348 1.875 4.375 1.875H10.625C10.9565 1.875 11.2745 2.0067 11.5089 2.24112C11.7433 2.47554 11.875 2.79348 11.875 3.125V13.125Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                    </svg>
                    <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                      Change Priority
                    </div>
                  </button>
                  <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                    <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.25 5C11.25 4.00544 10.8549 3.05161 10.1517 2.34835C9.44839 1.64509 8.49456 1.25 7.5 1.25C6.50544 1.25 5.55161 1.64509 4.84835 2.34835C4.14509 3.05161 3.75 4.00544 3.75 5C3.75 9.375 1.875 10.625 1.875 10.625H13.125C13.125 10.625 11.25 9.375 11.25 5Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      <path d="M8.5812 13.125C8.47132 13.3144 8.3136 13.4717 8.12384 13.581C7.93408 13.6903 7.71894 13.7478 7.49995 13.7478C7.28096 13.7478 7.06582 13.6903 6.87606 13.581C6.6863 13.4717 6.52858 13.3144 6.4187 13.125" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                    </svg>
                    <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                      {/* Reminder */}
                      Delete Task
                    </div>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      }
      <PriorityModal priorityModal={priorityModal} handlePriorityModal={handlePriorityModal} changePriority={changePriority} />
      <TitleModal id={id} taskTitle={taskTitle} titleModal={titleModal} handleTitleModal={handleTitleModal} changeTitle={changeTitle} />
      <DeleteModal id={id} deleteTask={deleteTask} deleteModal={deleteModal} handleDeleteModal={handleDeleteModal} />
    </div >
  )
}
export default TaskCard