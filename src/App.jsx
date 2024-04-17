import { useState } from "react";
import "./App.css";
import todoData from "./data/data";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(todoData);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 2000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <div className="w-[900px] mt-10 bg-white">
      <Header />
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
export default App;
