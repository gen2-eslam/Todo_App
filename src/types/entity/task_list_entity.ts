import TaskEntity from "./task_entity";

interface TaskListEntity {
    id: string;
    title: string;
    description: string;
    taskCount: number;
    progress: number;
    tasks: TaskEntity[];
}

export default TaskListEntity;