import TaskEntity from '../entity/task_entity';
import { Priority, Status } from '../enums/enum';
import TaskModel from '../model/task_model';

class TaskConverter {
  static toModel(entity: TaskEntity): TaskModel {
    return {
      id: entity.id?.toString() ?? '',
      title: entity.title ?? '',
      description: entity.description ?? '',
      dueDate: entity.dueDate ?? '',
      priority: entity.priority?.toString() ?? '0',
      status: entity.status?.toString() ?? 'OPEN',
    };
  }

  static toEntity(model: TaskModel): TaskEntity {
    return {
      id: model.id?.toString() ?? '',
      title: model.title ?? '',
      description: model.description ?? '',
      dueDate: model.dueDate ?? '',
      priority: Priority[model.priority?.toString() as keyof typeof Priority] ?? Priority.LOW,
      status: Status[model.status?.toString() as keyof typeof Status] ?? Status.OPEN,
    };
  }
}

export default TaskConverter;
