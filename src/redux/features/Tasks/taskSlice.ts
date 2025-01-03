import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
    {
      id: "0002",
      title: "Initial Task2",
      description: "This is the initial task",
      dueDate: "2025-11",
      isComplete: false,
      priority: "Medium",
    },
    {
      id: "0003",
      title: "Initial Task3",
      description: "This is the initial task",
      dueDate: "2025-11",
      isComplete: false,
      priority: "Low",
    },
  ],
  filter: "Medium",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
