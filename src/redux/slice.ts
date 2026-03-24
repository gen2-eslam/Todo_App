import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import TaskListEntity from '../types/entity/task_list_entity';
import TaskListAxios from '../axios/task_list_axios';
import TaskListMapper from '../types/mapper/task_list_mapper';
import TaskListModel from '../types/model/task_list_model';
import CreateTaskEntity from '../types/entity/create_task_entity';
import { CreateTaskListRequest } from '../types/model/create_task_list_request';
import { CreateTaskModel } from '../types/model/create_task_model';
import TaskModel from '../types/model/task_model';
import TaskConverter from '../types/mapper/task_converter';

export const fetchTaskList = createAsyncThunk<TaskListEntity[], void, { rejectValue: string }>(
  'taskList/fetchTaskList',
  async (_, thunkAPI) => {
    try {
      const response = await TaskListAxios.getTaskLists();
      return response.map((item: TaskListModel) => TaskListMapper.toEntity(item));
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch task lists');
    }
  },
);

const initialState = {
  taskLists: [] as TaskListEntity[],
  isLoading: false,
  error: null as string | null,
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<TaskListEntity[]>) => {
      state.taskLists = action.payload;
    },
    addTaskList: (state, action: PayloadAction<TaskListEntity>) => {
      state.taskLists.push(action.payload);
    },
    updateTaskList: (state, action: PayloadAction<TaskListEntity>) => {
      const index = state.taskLists.findIndex(
        (task) => task.id.toString() === action.payload.id.toString(),
      );
      if (index !== -1) {
        state.taskLists[index] = action.payload;
      }
    },
    addTaskToTaskList: (state, action: PayloadAction<{ taskListId: string; task: TaskModel }>) => {
      const index = state.taskLists.findIndex(
        (task) => task.id.toString() === action.payload.taskListId.toString(),
      );
      if (index !== -1) {
        state.taskLists[index].tasks.push(TaskConverter.toEntity(action.payload.task));
      }
    },
    deleteTaskList: (state, action: PayloadAction<string>) => {
      state.taskLists = state.taskLists.filter((task) => task.id.toString() !== action.payload);
    },
    updateTaskInTaskList: (
      state,
      action: PayloadAction<{ taskListId: string; task: TaskModel }>,
    ) => {
      const listIndex = state.taskLists.findIndex(
        (list) => list.id.toString() === action.payload.taskListId.toString(),
      );
      if (listIndex !== -1) {
        const taskIndex = state.taskLists[listIndex].tasks.findIndex(
          (task) => task.id.toString() === action.payload.task.id.toString(),
        );
        if (taskIndex !== -1) {
          state.taskLists[listIndex].tasks[taskIndex] = TaskConverter.toEntity(action.payload.task);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTaskList.fulfilled, (state, action: PayloadAction<TaskListEntity[]>) => {
        state.isLoading = false;
        state.taskLists = action.payload;
      })
      .addCase(fetchTaskList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || 'Failed to fetch task lists';
      });
  },
});

export const {
  setTaskList,
  addTaskList,
  updateTaskList,
  deleteTaskList,
  addTaskToTaskList,
  updateTaskInTaskList,
} = taskListSlice.actions;
export default taskListSlice.reducer;
