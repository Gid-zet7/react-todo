import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const [editTodoList, setEditTodoList] = useState(null);
  const [createTask, setCreateTask] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="form">
        <Form
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
          editTodoList={editTodoList}
          setEditTodoList={setEditTodoList}
          createTask={createTask}
          setCreateTask={setCreateTask}
        />
      </div>
      <div className="task-list">
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          editTodoList={editTodoList}
          setEditTodoList={setEditTodoList}
          setCreateTask={setCreateTask}
        />
      </div>
    </>
  );
}

export default App;
