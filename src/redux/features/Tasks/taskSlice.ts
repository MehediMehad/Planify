import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "0001",
      title: "Initial Task",
      description: "This is the initial task",
      isCompleted: false,
      priority: "High",
      dueDate: "2025-01-14T18:00:00.000Z",
    },
  ],
  filter: "Medium",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
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
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;
export const { addTask, toggleCompleteState } = taskSlice.actions;
export default taskSlice.reducer;
