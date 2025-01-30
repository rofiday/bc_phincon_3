import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const todos = state.filter((todo) => todo.id !== action.payload);
      console.log(todos);
      return todos;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
