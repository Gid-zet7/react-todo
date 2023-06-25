import React, { useEffect } from "react";
import uniqid from "uniqid";

export const Form = ({
  input,
  setInput,
  todoList,
  setTodoList,
  editTodoList,
  setEditTodoList,
  createTask,
  setCreateTask,
}) => {
  //   const inputRef = useRef();

  const buttonHandlder = () => {
    setCreateTask((prevState) => {
      return !prevState;
    });
  };

  const buttonCancelHandlder = () => {
    setCreateTask((prevState) => {
      return !prevState;
    });
    setEditTodoList("");
  };

  const changeInputHandler = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todoList.map((todo) =>
      todo.id === id ? { title: title, id: id, completed: completed } : todo
    );
    setTodoList(newTodo);
    setEditTodoList("");
  };

  useEffect(() => {
    if (editTodoList) {
      setInput(editTodoList.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodoList]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!editTodoList) {
      setTodoList([
        ...todoList,
        { id: uniqid(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodoList.id, editTodoList.completed);
    }
    buttonHandlder();
  };

  return (
    <>
      <div>
        <button type="button" className="create-btn" onClick={buttonHandlder}>
          Create Task
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill="#1ae094"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32
             32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0
              17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7
               0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      {createTask && (
        <div className="form-container">
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Enter a task..."
              className="task-input"
              value={input}
              required
              onChange={changeInputHandler}
            />
            <div className="btn-div">
              <button className="task-btn add" type="submit">
                {editTodoList ? "Edit task" : "Add task"}
              </button>
              <button
                className="task-btn cancel"
                type="button"
                onClick={buttonCancelHandlder}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
