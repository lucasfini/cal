import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      <div className="todo">
      
        <button onClick={deleteHandler} className="trash-btn p-1">
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={completeHandler} className="complete-btn p-1">
          <i className="fas fa-check"></i>
        </button>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      </div>
    </div>
  );
};

export default Todo;
