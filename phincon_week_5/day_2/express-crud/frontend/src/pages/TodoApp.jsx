import { useReducer, useState } from "react";
import { todoReducer } from "../stores/todoReducer";

export default function TodoApp() {
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("todos"))
  );
  const [title, setTitle] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = (id) => {
    //digunakan untuk eksekusi actionnya
    dispatch({ type: "ADD_TODO", payload: id });
  };
  const handleAddToggleTodo = (title) => {
    dispatch({ type: "ADD_TOGGLE_TODO", payload: title });
  };
  const deleteTodo = (id) => {
    //type digunakan untuk menentukan aksinya
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const handleChangeFilter = (e) => {
    if (e.target.value === "completed") {
      dispatch({ type: "completed" });
    } else if (e.target.value === "all") {
      dispatch({ type: "ALL_TITLE" });
    } else if (e.target.value === "uncompleted") {
      dispatch({ type: "uncompleted" });
    }
  };
  return (
    <>
      <h1 className="text-2xl text-black text-center mt-20">Todo App</h1>
      <div className="container mx-auto shawod-lg flex flex-col justify-center items-center mt-5 w-1/2 p-2">
        <div className=" text-white flex flex-col items-center p-2 border-b ">
          <div>
            <input
              type="text"
              className="border-2 border-black  text-black"
              value={title}
              placeholder="Add Todo"
              onChange={(e) => handleChangeTitle(e)}
            />
            <button
              className="bg-blue-500"
              onClick={() => handleAddToggleTodo(title)}
              value={title}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleAddToggleTodo(title);
                  setTitle("");
                }
              }}
            >
              Add
            </button>
          </div>
          <div className="text-black my-2 w-[300px]">
            <label htmlFor="filter">Filter Progress</label>
            <div className="">
              <select
                name=""
                id=""
                // onClick={(e) => console.log(e.target.value)}
                onChange={(e) => handleChangeFilter(e)}
                className="w-full"
              >
                <option value="">-- Select Filter --</option>
                <option value="all">All title</option>
                <option value="completed">All Completed</option>
                <option value="uncompleted">All Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-start mt-2">
          {todos.map((todo) => (
            <div key={todo.id} className="flex justify-between gap-10">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => addTodo(todo.id)}
                  className="mr-2"
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.title}
                </span>
              </div>
              <button
                className="bg-red-500 py-1 px-4 mt-1"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
