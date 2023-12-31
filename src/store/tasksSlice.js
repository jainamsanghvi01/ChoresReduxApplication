import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: "",
});

const initialState = [
  createTask("Order more energy drinks"),
  createTask("Water the plants"),
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    toogle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignedToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    },
  },
});

export const toogelTask = createAction("tasks/toogle", (taskId, completed) => ({
  payload: { taskId, completed },
}));
