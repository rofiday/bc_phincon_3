import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    mode: "all",
    //2 todos kosong  all todos db filter todos hasil dari filter dari aktif dan completed
    allTodos: [],
    filteredTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push(action.payload);
      state.filteredTodos = state.allTodos;
      state.mode = "all";
    },
    todoCompleted: (state) => {
      let todos = "filteredTodos";
      if (state.mode === "active") todos = "allTodos";
      console.log("todos: ", todos);
      state.filteredTodos = state[todos].filter(
        (todo) => todo.completed === true
      );
      console.log("state: ", state);

      state.mode = "completed";
    },
    toggleChecked: (state, action) => {
      console.log("payload checked:", action.payload);
      state.filteredTodos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      state.allTodos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    todoActive: (state) => {
      let todos = "filteredTodos";
      if (state.mode === "completed") todos = "allTodos";
      state.filteredTodos = state[todos].filter(
        (todo) => todo.completed === false
      );
      state.mode = "active";
    },
    removeTodo: (state, action) => {
      state.filteredTodos = state.filteredTodos.filter(
        (todo) => todo.id !== action.payload
      );
      state.allTodos = state.filteredTodos;
    },
    clearTodo: (state) => {
      state.filteredTodos = [];
      state.allTodos = [];
    },
    todoAllState: (state) => {
      state.mode = "all";
      state.filteredTodos = state.allTodos;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  todoCompleted,
  toggleChecked,
  todoActive,
  clearTodo,
  todoAllState,
} = todosSlice.actions;
export default todosSlice.reducer;
