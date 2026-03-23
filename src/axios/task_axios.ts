import axiosInstance from './axios';
import TaskModel from '../types/model/task_model';

class TaskAxios {
  async createTask(task: TaskModel) {
    const response = await axiosInstance.post('tasks/create-task', task);
    return response.data['data'];
  }

  async updateTask(task: TaskModel) {
    const response = await axiosInstance.put(`tasks/update-task/${task.id}`, task);
    return response.data['data'];
  }

  async deleteTask(id: number) {
    const response = await axiosInstance.delete(`tasks/delete-task/${id}`);
    return response.data['data'];
  }
}

export default new TaskAxios();
