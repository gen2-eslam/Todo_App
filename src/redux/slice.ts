import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import TaskListEntity from '../types/entity/task_list_entity';
import TaskListAxios from '../axios/task_list_axios';
import TaskListMapper from '../types/mapper/task_list_mapper';
import TaskListModel from '../types/model/task_list_model';
import CreateTaskEntity from '../types/entity/create_task_entity';
import { CreateTaskListRequest } from '../types/model/create_task_list_request';

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
    deleteTaskList: (state, action: PayloadAction<string>) => {
      state.taskLists = state.taskLists.filter((task) => task.id.toString() !== action.payload);
      
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

export const { setTaskList, addTaskList, updateTaskList, deleteTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;
