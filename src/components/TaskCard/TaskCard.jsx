import { useState } from 'react';
import Todos from './Todos';

// eslint-disable-next-line react/prop-types
const TaskCard = ({ background, priority, taskTitle, completed = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [isStarred, setIsStarred] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleMore = () => {
    setOpenMore(!openMore)
  }
  const handleStar = () => {
    setIsStarred(!isStarred)
  }
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500"
  }
  const todos = [
    {
      done: true,
      todo: "Wash and boil the rice"
    },
    {
      done: false,
      todo: "Prepare the vegetable sauce"
    },
  ]
  
  return (
    <div className="flex flex-col py-3 px-4" style={{backgroundColor: background}}>
      <div className="flex justify-between w-full">
        <div>
          <div className="flex items-center">
            <div className={`w-2.5 h-2.5 rounded-full mr-2 ${!completed ? priorityColors[priority]: "bg-[#4a4a477f]"}`}></div>
            <div className={completed ? `text-[#4a4a477f]`: `text-secondary`}>{priority}</div>
          </div>
          <div className={completed ? `text-[#4a4a477f]`: `text-secondary`}>
            {taskTitle}
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={handleOpen} className={`${completed ? `text-[#4a4a477f]`: "text-secondary"} ${isOpen? "rotate-180" : ""} transition duration-200`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M6.5 9L12.5 15L18.5 9" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
        {isOpen &&
          <div className='flex flex-col pt-6 gap-3'>
            {todos.map((t, index)=> (
              <Todos key={index} completed={completed} done={completed ? true : t.done} todo={t.todo} />
            ))}
            <div className="flex justify-between mt-3 px-1">
              <div>
                <button className="mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 5.83331H15C15.5472 5.83331 16.089 5.94109 16.5945 6.15048C17.1 6.35988 17.5594 6.66679 17.9463 7.0537C18.3332 7.44061 18.6401 7.89994 18.8495 8.40547C19.0589 8.91099 19.1667 9.45281 19.1667 9.99998C19.1667 10.5472 19.0589 11.089 18.8495 11.5945C18.6401 12.1 18.3332 12.5593 17.9463 12.9463C17.5594 13.3332 17.1 13.6401 16.5945 13.8495C16.089 14.0589 15.5472 14.1666 15 14.1666H12.5M7.5 14.1666H5C4.45282 14.1666 3.91101 14.0589 3.40548 13.8495C2.89996 13.6401 2.44063 13.3332 2.05372 12.9463C1.27232 12.1649 0.833332 11.105 0.833332 9.99998C0.833332 8.89491 1.27232 7.8351 2.05372 7.0537C2.83512 6.2723 3.89493 5.83331 5 5.83331H7.5" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 10H13.3333" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button disabled={completed} onClick={handleStar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className={isStarred ? "fill-secondary" : "fill-none"}>
                    <path d="M10 1.66669L12.575 6.88335L18.3333 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85 17.5167L5.83333 11.7834L1.66667 7.72502L7.425 6.88335L10 1.66669Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button disabled={completed} onClick={handleMore}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#033835" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <path d="M5 14.375H10" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]"/>
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
                    <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                      <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M11.875 13.125L7.5 10L3.125 13.125V3.125C3.125 2.79348 3.2567 2.47554 3.49112 2.24112C3.72554 2.0067 4.04348 1.875 4.375 1.875H10.625C10.9565 1.875 11.2745 2.0067 11.5089 2.24112C11.7433 2.47554 11.875 2.79348 11.875 3.125V13.125Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      </svg>
                      <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                        Add Priority
                      </div>
                    </button>
                    <button className="group transition duration-200 flex items-center w-full p-2 hover:bg-[#D7FFFD] mb-1">
                      <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M11.25 5C11.25 4.00544 10.8549 3.05161 10.1517 2.34835C9.44839 1.64509 8.49456 1.25 7.5 1.25C6.50544 1.25 5.55161 1.64509 4.84835 2.34835C4.14509 3.05161 3.75 4.00544 3.75 5C3.75 9.375 1.875 10.625 1.875 10.625H13.125C13.125 10.625 11.25 9.375 11.25 5Z" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                        <path d="M8.5812 13.125C8.47132 13.3144 8.3136 13.4717 8.12384 13.581C7.93408 13.6903 7.71894 13.7478 7.49995 13.7478C7.28096 13.7478 7.06582 13.6903 6.87606 13.581C6.6863 13.4717 6.52858 13.3144 6.4187 13.125" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary group-hover:stroke-[#22C6BC]" />
                      </svg>
                      <div className="text-xs group-hover:text-[#22C6BC] text-secondary/80">
                        Reminder
                      </div>
                    </button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                }
              </div>
            </div>
          </div>
        }
    </div>
  )
}
export default TaskCard