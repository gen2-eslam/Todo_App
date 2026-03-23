import axiosInstance from './axios';
import { CreateTaskListRequest } from '../types/model/create_task_list_request';

class TaskListAxios {
  getTaskLists = async () => {
    const response = await axiosInstance.get('/task-lists');
    return response.data['data'];
  };

  addTaskList = async (taskList: CreateTaskListRequest) => {
    console.log(taskList);
    const response = await axiosInstance.post('/task-lists/create-task-list', taskList);
    return response.data['data'];
  };

  updateTaskList = async ({ id, taskList }: { id: string; taskList: CreateTaskListRequest }) => {
    const response = await axiosInstance.put(`/task-lists/update-task-list/${id}`, taskList);
    return response.data['data'];
  };

  deleteTaskList = async (id: string) => {
    const response = await axiosInstance.delete(`/task-lists/delete-task-list`, {
      params: {
        task_list_id: id,
      },
    });
    return response.data;
  };
}
export default new TaskListAxios();
