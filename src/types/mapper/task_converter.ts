import TaskEntity from "../entity/task_entity";
import { Priority, Status } from "../enums/enum";
import TaskModel from "../model/task_model";

class TaskConverter {
    static toModel(entity: TaskEntity): TaskModel {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            dueDate: entity.dueDate.toISOString(), 
            priority: entity.priority, 
            status: entity.status,
        };
    }

    static toEntity(model: TaskModel): TaskEntity {
        return {
            id: model.id,
            title: model.title,
            description: model.description,
            dueDate: new Date(model.dueDate), 
            priority: model.priority as Priority, 
            status: model.status as Status, 
        };
    }
}

export default TaskConverter;
