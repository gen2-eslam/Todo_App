import TaskModel from "./task_model";

interface TaskListModel {
    id: string;
    title: string;
    description: string;
    taskCount: number;
    progress: number;
    tasks: TaskModel[];
}

export default TaskListModel;