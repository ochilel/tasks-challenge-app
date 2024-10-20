import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Task {
  id: string;
  description: string;
}

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: Date.now().toString(),
        description: action.payload,
      };
      state.tasks.push(newTask);
    },
  },
});

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
