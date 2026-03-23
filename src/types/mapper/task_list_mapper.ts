import TaskListEntity from '../entity/task_list_entity';
import TaskListModel from '../model/task_list_model';
import TaskConverter from './task_converter';

class TaskListMapper {
  static toModel(entity: TaskListEntity): TaskListModel {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      taskCount: entity.taskCount,
      progress: entity.progress,
      tasks: entity.tasks.map((task) => TaskConverter.toModel(task)),
    };
  }

  static toEntity(model: TaskListModel): TaskListEntity {
    return {
      id: model.id,
      title: model.title,
      description: model.description,
      taskCount: model.taskCount,
      progress: model.progress * 100,
      tasks: model.tasks.map((task) => TaskConverter.toEntity(task)),
    };
  }
}

export default TaskListMapper;
