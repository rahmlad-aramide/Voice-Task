// import { AddBar, RecorderModal, TaskCard } from '../../components'
import { CreateModal, TaskCard } from "../../components";

import { useSearch } from "../../contexts/SearchContext/SearchContext";
import { useState } from "react";
import emptyState from "../../assets/images/empty-state.png";
import { Plus } from "../../assets/svg";
// import { data } from "../../utils/data";
import { useMutationContext } from "../../contexts/MutationContext/MutationContext";

const Dashboard = () => {
  const { searchValue } = useSearch();
  const { fetchedData } = useMutationContext();

  const filteredData = fetchedData?.filter((d) =>
    d.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // const filteredData = data?.tasks.filter((d) =>
  //   d.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const completedTasks = filteredData?.filter((d) => d.completed === true);
  const incompletedTasks = filteredData?.filter((d) => d.completed === false);

  // console.log(completedTasks);
  const [activeButton, setActiveButton] = useState("upcoming");
  const [openModal, setOpenModal] = useState(false);

  const taskStats = [
    {
      title: "Upcoming Tasks",
      value: incompletedTasks ? incompletedTasks.length : "0",
      body: incompletedTasks && incompletedTasks.length > 1 ? "Tasks" : "Task",
      bg: "#AEFFFA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M23 6.5L13.5 16L8.5 11L1 18.5"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 6.5H23V12.5"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Completed Tasks",
      value: completedTasks ? completedTasks.length : "0",
      body: completedTasks && completedTasks.length > 1 ? "Tasks" : "Task",
      bg: "#C13DFF4D",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 4L12 14.01L9 11.01"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Collaborators",
      value: "0",
      body: "Collaborators",
      bg: "#07B7FFA6",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="black"
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-[90%] max-w-[1024px] mx-auto pt-9">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="mb-6 md:mb-0 flex flex-col w-[90%] md:w-[80%] md:mr-2">
          <h1 className="text-[25px] font-medium mb-2 text-center md:text-left">
            Welcome Abdrahman,
          </h1>
          <p className="text-grey-600 text-center md:text-left flex shrink">
            Ready to get things done? Start by adding your first task - simply
            click &lsquo;Create New Task&rsquo; to begin. 😊
          </p>
        </div>
        <div className="flex w-fit">
          <button
            onClick={() => setOpenModal(!openModal)}
            className="bg-primary/90 hover:bg-purple-600 disabled:bg-primary/80 disabled:cursor-not-allowed transition duration-200 h-10 rounded-lg text-white font-medium gap-2 p-4 flex shrink-0 items-center justify-center"
          >
            <Plus />
            Create New Task
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {taskStats.map((t, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-7 py-8 rounded-lg border border-[#DBDBDB]"
          >
            <div className="flex flex-col gap-y-2">
              <h2 className="text-grey-600 text-sm">{t.title}</h2>
              <h4>
                {t.value} {t.body}
              </h4>
            </div>
            <div
              className="text-[#344054] text-xl font-medium mr-2 p-2 rounded-full"
              style={{ backgroundColor: t.bg }}
            >
              {t.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 md:gap-x-3 w-full mt-8 p-1 bg-grey-100 rounded-lg">
        <button
          onClick={() => setActiveButton("upcoming")}
          className={
            activeButton === "upcoming"
              ? `col-span-2 md:col-span-1 flex justify-center items-center py-2 px-3 bg-white rounded-lg shadow-normal text-grey-700 transition duration-200`
              : `col-span-2 md:col-span-1 flex justify-center items-center py-2 px-3 bg-transparent text-grey-500 transition duration-200`
          }
        >
          Upcoming Tasks
        </button>
        <button
          onClick={() => setActiveButton("completed")}
          className={
            activeButton === "completed"
              ? `flex justify-center items-center py-2 px-3 bg-white rounded-lg shadow-normal text-grey-700 transition duration-200`
              : `flex justify-center items-center py-2 px-3 bg-transparent text-grey-500 transition duration-200`
          }
        >
          Completed Tasks
        </button>
        <button
          onClick={() => setActiveButton("collaborators")}
          className={
            activeButton === "collaborators"
              ? `flex justify-center items-center py-2 px-3 bg-white rounded-lg shadow-normal text-grey-700 transition duration-200`
              : `flex justify-center items-center py-2 px-3 bg-transparent text-grey-500 transition duration-200`
          }
        >
          Collaborators
        </button>
      </div>
      {filteredData && activeButton !== "collaborators" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-[53px] mb-10">
          {activeButton === "upcoming" && incompletedTasks?.length > 0 ? (
            incompletedTasks.map((t) => <TaskCard key={t._id} task={t} />)
          ) : activeButton === "completed" && completedTasks?.length > 0 ? (
            completedTasks.map((t) => <TaskCard key={t._id} task={t} />)
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center -mt-[53px] md:-mt-10 mb-10">
              <img src={emptyState} alt="No task added yet" />
              <div className="text-grey-600 text-xl">
                {activeButton === "upcoming" && incompletedTasks?.length === 0
                  ? "You have no upcoming tasks, you can add one now"
                  : activeButton === "completed" && completedTasks?.length === 0
                  ? "You have not completed any task yet"
                  : activeButton === "collaborators"
                  ? "This is a coming soon feature, check back later"
                  : "No task added, add task to begin"}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-5 mb-20">
          <img src={emptyState} alt="No task added yet" />
          <div className="text-grey-600 text-xl">
            {activeButton === "upcoming" && incompletedTasks?.length === 0
              ? "You have no upcoming tasks, you can add one now"
              : activeButton === "completed" && completedTasks?.length === 0
              ? "You have not completed any task yet"
              : activeButton === "collaborators"
              ? "This is a coming soon feature, check back later"
              : "No task added, add task to begin"}
          </div>
        </div>
      )}
      <CreateModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Dashboard;
