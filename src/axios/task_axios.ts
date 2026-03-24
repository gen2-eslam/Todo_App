import axiosInstance from './axios';
import TaskModel from '../types/model/task_model';
import { CreateTaskModel } from '../types/model/create_task_model';

class TaskAxios {
  async createTask(task: CreateTaskModel) {
    const response = await axiosInstance.post('/tasks/create-task', task, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response.data["data"]', response.data['data']);

    return response.data['data'];
  }

  async updateTask(task: TaskModel) {
    const response = await axiosInstance.put(`/tasks/update-task`, task, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        task_id: task.id,
      },
    });
    return response.data['data'];
  }

  async deleteTask(id: number) {
    const response = await axiosInstance.delete(`/tasks/delete-task/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data['data'];
  }
}

export default new TaskAxios();
