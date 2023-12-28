import { createBuilder } from "@ibnlanre/portal";
import { AUTHAPI, USETOKEN } from "./axios-config";

// let taskId;
export const builder = createBuilder({
  auth: {
    signup: (data) => AUTHAPI.post("/api/v1/auth/signup", data),
    signin: (data) => AUTHAPI.post("/api/v1/auth/signin", data),
  },
  task: {
    create_task: (data) => USETOKEN.post("/api/v1/task", data),
    get_tasks: () => USETOKEN.get(`/api/v1/task`),
    get_task: (taskId) => USETOKEN.get(`/api/v1/task/${taskId}`),
    change_task_status: (taskId) =>
      USETOKEN.patch(`/api/v1/task/${taskId}/status`),
    change_task_priority: ({ taskId, data }) =>
      USETOKEN.patch(`/api/v1/task/${taskId}/priority`, {priority:data}),
    change_task_title: ({ taskId, data }) =>
      USETOKEN.patch(`/api/v1/task/${taskId}/title`, {title:data}),
    delete_task: (taskId) => USETOKEN.delete(`/api/v1/task/${taskId}`),
    add_subtask: ({ taskId, data }) => {
      return USETOKEN.put(`/api/v1/task/${taskId}/subtask`, {todo:data});
    },
    change_subtask_status: ({ taskId, subtaskId, data }) =>
      USETOKEN.patch(
        `/api/v1/task/${taskId}/substack/status?subtaskId=${subtaskId}`,
        data
      ),
    change_subtask_todo: ({ taskId, subtaskId, data }) =>
      USETOKEN.patch(
        `/api/v1/task/${taskId}/subtask/todo?subtaskId=${subtaskId}`,
        {todo:data}
      ),
    delete_subtask: ({ taskId, subtaskId }) =>
      USETOKEN.delete(`/api/v1/task/${taskId}/substack?subtaskId=${subtaskId}`),
  },
});
