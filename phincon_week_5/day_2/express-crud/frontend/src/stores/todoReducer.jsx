import initialTodos from "../jsons/todo.json";
if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(initialTodos));
  console.log(localStorage.getItem("todos"));
}
//controller reducer yang akan menentukan aksi apa yang ingin dilakukan terhadap data
const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const newTodos = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(newTodos);
    return newTodos;
  } else if (action.type === "ADD_TOGGLE_TODO") {
    return [
      ...state,
      {
        id: state.length + 1,
        title: action.payload,
        completed: false,
      },
    ];
  } else if (action.type === "DELETE_TODO") {
    //filter sama kaya map dan hanya mengambil data sesuai  yang kondisi yang ditentukan
    return state.filter((todo) => todo.id !== action.payload);
  } else if (action.type === "SEARCH_TITLE") {
    if (action.payload === "all") {
      return [...state];
    } else if (action.payload === "completed") {
      return state.filter((todo) => todo.completed);
    } else if (action.payload === "uncompleted") {
      return state.filter((todo) => !todo.completed);
    }
  } else {
    return state;
  }
};

export { todoReducer };
