import React from "react";
import ReactDOM from "react-dom";

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container-flush">
      <div className="row">
        <form>
          <div className="col">
          <div className="select">
              <select
                onChange={statusHandler}
                name="todos"
                className="form-select"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
            <input
              value={inputText}
              onChange={inputTextHandler}
              type="text"
              className="todo-input"
            />
            <button
              onClick={submitTodoHandler}
              className="todo-button"
              type="submit"
            >
              <i className="fas fa-plus-square"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
