import { useState } from "react";
import lightBg from "./assets/images/bg-desktop-light.jpg";
import {
  addTodo,
  clearTodo,
  removeTodo,
  todoActive,
  todoCompleted,
  toggleChecked,
  todoAllState,
} from "./features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateId } from "./helper/helper";
const App = () => {
  const dispatch = useDispatch();
  const { filteredTodos: todos, mode } = useSelector((state) => state.todos);
  const [todoValue, setTodoValue] = useState("");
  const handleAddTodo = () => {
    dispatch(addTodo({ id: generateId(10), todoValue, completed: false }));
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleTodoCompleted = () => {
    dispatch(todoCompleted());
  };
  const handleToggleChecked = (id) => {
    dispatch(toggleChecked(id));
  };
  const handleToggleActive = () => {
    dispatch(todoActive());
  };
  const handleClearTodo = () => {
    dispatch(clearTodo());
  };
  const handleTodoAllState = () => {
    dispatch(todoAllState());
  };
  return (
    <div
      className="h-96 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${lightBg})` }}
    >
      <div className="container mx-auto pt-52 w-[23rem] md:w-[32rem] lg:w-[42rem] p-5">
        <h1 className=" text-7xl uppercase tracking-[20px] text-white font-semibold">
          Todo
        </h1>
        <div className="shadow-2xl flex flex-col justify-center items-center mt-5 ">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Create new a todo"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              className="bg-white w-full p-2 border-none outline-none rounded-md "
            />
            <button
              className="bg-yellow-600 hover:bg-yellow-500 py-2 px-2 text-white font-bold rounded-md absolute top-0 right-0"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>
        <div className="my-5 shadow-lg bg-white p-3 rounded-md">
          {todos.map((todo) => (
            <div
              className="flex justify-between items-center gap-10 border-b-2 border-gray-200 w-full my-2"
              key={todo.id}
            >
              <input
                type="checkbox"
                className="text-xl"
                defaultChecked={todo.completed}
                onChange={() => handleToggleChecked(todo.id)}
              />
              <span
                className="text-xl"
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                }}
              >
                {todo.todoValue}
              </span>
              <button
                onClick={() => {
                  handleRemoveTodo(todo.id);
                }}
                className="text-xl"
              >
                X
              </button>
            </div>
          ))}

          <div className="flex flex-col justify-between items-center pt-2 md:flex md:flex-row md:items-center">
            <p className="text-center pt-1">{todos.length} items left</p>
            <button
              style={mode === "all" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleTodoAllState()}
              className="pt-1"
            >
              All
            </button>
            <button
              style={mode === "active" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleToggleActive()}
              className="pt-1"
            >
              Active
            </button>
            <button
              style={
                mode === "completed" ? { color: "blue" } : { color: "black" }
              }
              onClick={() => {
                handleTodoCompleted();
              }}
              className="pt-1"
            >
              Completed
            </button>
            <button onClick={() => handleClearTodo()} className="pt-1">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
