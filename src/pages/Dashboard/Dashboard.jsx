import { AddBar, TaskCard } from '../../components'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// const tasks = [
//   {
//     priority: "High",
//     taskTitle: "Make Breakfast by 7:00am",
//     tasks: [
//       "Wash and boil the rice",
//       "Prepare the vegetable sauce"
//     ]
//   },
//   {
//     priority: "Medium",
//     taskTitle: "Make Breakfast by 7:00am",
//     tasks: [
//       "Wash and boil the rice",
//       "Prepare the vegetable sauce"
//     ]
//   },
//   {
//     priority: "Low",
//     taskTitle: "Make Breakfast by 7:00am",
//     tasks: [
//       "Wash and boil the rice",
//       "Prepare the vegetable sauce"
//     ]
//   },
//   {
//     priority: "High",
//     taskTitle: "Make Breakfast by 7:00am",
//     tasks: [
//       "Wash and boil the rice",
//       "Prepare the vegetable sauce"
//     ]
//   },
// ]

import { builder } from '/src/api/builder'
import { useSearch } from '../../contexts/SearchContext/SearchContext'

const Dashboard = () => {
  const colors = ['#e8b8ff99', "#D7FFFD", "#F0ECEC", "#ffec457f"]
  const queryClient = useQueryClient()
  const {searchValue} = useSearch();

  const { data, isLoading } = useQuery({
    queryFn: () => builder.use().task.get_tasks(),
    queryKey: builder.task.get_tasks.get(),
    select: ({ data }) => data?.tasks,
  });

  const filteredData = data?.filter((d) => d.title.toLowerCase().includes(searchValue.toLowerCase()))

  // Change Task Status
  const { mutate: changeTaskStatus, isChangingTaskStatus } = useMutation({
    mutationFn: builder.use().task.change_task_status,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while changing task status:",err);
      // toast.error("invalid input");
    },
  });
  // Change Priority
  const { mutate: changePriority, isChangingPriority } = useMutation({
    mutationFn: builder.use().task.change_task_priority,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while changing task status:",err);
      // toast.error("invalid input");
    },
  });
  // Change Title
  const { mutate: changeTitle, isChangingTitle } = useMutation({
    mutationFn: builder.use().task.change_task_title,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while changing task title:",err);
      // toast.error("invalid input");
    },
  });
  // Delete Task
  const { mutate: deleteTask } = useMutation({
    mutationFn: builder.use().task.delete_task,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while deleting task:",err);
      // toast.error("invalid input");
    },
  });
  // Add SubTask
  const { mutate: addSubtask, isAddingSubtask } = useMutation({
    mutationFn: builder.use().task.add_subtask,
    onSuccess(data) {
      console.log(data)
      queryClient.invalidateQueries(builder.task.get_tasks.get())
    },
    onError(err) {
      console.log("Error while adding subtask:",err);
      // toast.error("invalid input");
    },
  });

  console.log(data);
  console.log('isloading', isLoading);
  const completedTasks = filteredData?.filter((d) => d.completed === true)
  const incompletedTasks = filteredData?.filter((d) => d.completed === false)

  console.log('completed', completedTasks);
  console.log('incompleted', incompletedTasks);
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
          {isLoading && <div>Loading completed tasks...</div>}
          {incompletedTasks?.length === 0 && <div>Start using Voice Task by creating a new task above</div>}
          {incompletedTasks?.map((t, index) => (
            <TaskCard key={index} id={t._id} background={colors[index % colors.length]} priority={t.priority} taskTitle={t.title} subtasks={t.subTasks}
              changeTaskStatus={changeTaskStatus} isChangingTaskStatus={isChangingTaskStatus} 
              changePriority={changePriority} isChangingPriority={isChangingPriority}
              changeTitle={changeTitle} isChangingTitle={isChangingTitle}
              deleteTask={deleteTask} addSubtask={addSubtask}
              isAddingSubtask={isAddingSubtask}
              />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <div className="text-xl font-medium">Completed</div>
          {isLoading && <div>Loading incompleted tasks...</div>}
          {(completedTasks?.length < 0 || completedTasks) && <div>You don&rsquo;t have any completed task yet</div>}
          {completedTasks?.map((t, index) => (
            <TaskCard key={index} id={t._id} background={"#dfded17f"} priority={t.priority} taskTitle={t.title} completed={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard