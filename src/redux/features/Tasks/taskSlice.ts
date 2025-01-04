import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}
const initialState: InitialState = {
  tasks: [],
  filter: "Medium",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isComplete: false,
    ...taskData,
  };
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
