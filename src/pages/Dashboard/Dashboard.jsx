import { AddBar, TaskCard } from '../../components'

const tasks = [
  {
    priority: "High",
    taskTitle: "Make Breakfast by 7:00am",
    tasks: [
      "Wash and boil the rice",
      "Prepare the vegetable sauce"
    ]
  },
  {
    priority: "Medium",
    taskTitle: "Make Breakfast by 7:00am",
    tasks: [
      "Wash and boil the rice",
      "Prepare the vegetable sauce"
    ]
  },
  {
    priority: "Low",
    taskTitle: "Make Breakfast by 7:00am",
    tasks: [
      "Wash and boil the rice",
      "Prepare the vegetable sauce"
    ]
  },
  {
    priority: "High",
    taskTitle: "Make Breakfast by 7:00am",
    tasks: [
      "Wash and boil the rice",
      "Prepare the vegetable sauce"
    ]
  },
]

const Dashboard = () => {
  const colors = ['#e8b8ff99', "#D7FFFD", "#F0ECEC", "#ffec457f"]
  return (
    <div className="w-[90%] max-w-[992px] mx-auto">
      <div className="mt-10 mb-4">
        <div className="text-[20px] font-medium mb-4">
          Add a Task
        </div>
        {/* Add Bar here */}
        <AddBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-10">
        <div className='flex flex-col gap-3'>
          <div className="text-xl font-medium">My Task(s)</div>
          {tasks.map((t, index)=>(
            <TaskCard key={index} background={colors[index % colors.length]} priority={t.priority} taskTitle={t.taskTitle} />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <div className="text-xl font-medium">Completed</div>
          {tasks.map((t, index)=>(
            <TaskCard key={index} background={"#dfded17f"} priority={t.priority} taskTitle={t.taskTitle} completed={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard