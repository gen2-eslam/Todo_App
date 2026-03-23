import { Priority, Status } from '../enums/enum';

interface TaskEntity {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
}

export default TaskEntity;
