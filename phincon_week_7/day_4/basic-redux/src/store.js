import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/counterSlice";
import todoReducer from "./features/todos/todoSlice";
import studentReducer from "./features/students/studentSlice";
export const store = configureStore({
  reducer: {
    // penamaan obj sangat penting untuk memudahkan pemanggilan(consume)
    counter: counterReducer,
    todos: todoReducer,
    student: studentReducer,
  },
});
