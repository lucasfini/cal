import React from "react";
import ReactDOM from "react-dom";
//Import Components
import Todo from "./todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default TodoList;
