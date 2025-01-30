import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counters/counterSlice";
import { addTodo, removeTodo } from "./features/todos/todoSlice";
import { useEffect, useState } from "react";
import { fetchStudents } from "./features/students/studentAction";
import { generateId } from "./helper/generateId";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClickIncrement = () => dispatch(increment());
  const handleClickDecrement = () => dispatch(decrement());
  const [todoValue, setTodoValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const handleAddTodo = () => {
    dispatch(addTodo({ id: generateId(10), todoValue }));
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const { data, message, error, isLoading } = useSelector(
    (state) => state.student
  );
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>count : {count}</p>
        <button onClick={handleClickIncrement}>increment</button>
        <button onClick={handleClickDecrement}>decrement</button>
      </div>
      <section className="todo">
        <div>
          <h2>Todo App</h2>
          <input
            type="text"
            placeholder="Add a new todo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todos.map((todo) => (
              <div key={todo.id}>
                <li>{todo.todoValue}</li>
                <button onClick={() => handleRemoveTodo(todo.id)}>X</button>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h1>Students</h1>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
          {data?.map((student, index) => (
            <p key={index}>{student.name}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
