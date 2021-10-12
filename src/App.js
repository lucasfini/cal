import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

//Import Components
import Form from "./components/form";
import TodoList from "./components/todolist";
import Weather from "./components/weather";
import LabelBottomNavigation from "./components/bottomNav";
import Carouselpic from "./components/carousel";
import Calendar from "./components/calendar";

require("dotenv").config();
function App() {
  //States
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [navData, setNavData] = useState("todo");

  //Run Once When app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return (
    <div className="container-flush">
      <div className="row ">
        <div
          className="col-12 col-xxl-3 col-xl-3 p-0"
          style={
            windowDimensions.width <= 1200
              ? { display: navData == "todo" ? "flex" : "none" }
              : { display: "flex", flexDirection: "column" }
          }
        >
          <div className="todoBorder" align="center">
            <div className="row">
              <div className="col-12 ">
                <h1 style={{ display: "inline-block" }}> Lucas's Todo List</h1>
                <div className="row" style={{ width: "85%" }}>
                  <div className="col-12">
                    <Carouselpic windowDimensions={windowDimensions} />
                  </div>
                </div>
                <div className="row" style={{ width: "90%" }}>
                  <div className="col-12">
                    <Form
                      todos={todos}
                      setTodos={setTodos}
                      inputText={inputText}
                      setInputText={setInputText}
                      setStatus={setStatus}
                    />
                  </div>
                </div>
                <div className="row" style={{ width: "90%" }}>
                  <div className="col-12">
                    <TodoList
                      filteredTodos={filteredTodos}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  </div>
                </div>
                <div className="row" style={{ width: "90%" }}>
                  <div className="col-12">
                    <Weather />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-xxl-9 col-xl-9  "
          align="center"
          style={
            windowDimensions.width <= 1200
              ? { display: navData == "calender" ? "flex" : "none" }
              : { display: "flex", flexDirection: "column", justifyContent: "center", height: "auto" }
          }
        >
          <div className="row" >
            <div className="col-12 calPos " align="center">
              <main>
                <Calendar />
              </main>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
            align="center"
          >
            <div className="bottomNav p-0">
              <LabelBottomNavigation
                setNavData={setNavData}
                windowDimensions={windowDimensions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
