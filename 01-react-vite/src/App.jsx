import { useState } from "react";
import ToDoData from "./components/todo/ToDoData";
import ToDoContent from "./components/todo/ToDoContent";
import "./components/todo/todo.css";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = () => {
  const [toDoList, setToDoList] = useState([
    { id: 1, name: "Sleeping" },
    { id: 2, name: "Learn React" },
  ]);

  const addNewToDo = (name) => {
    const new_todo = {
      id: randomIntFromInterval(1, 1000),
      name: name,
    };
    setToDoList([...toDoList, new_todo]);
  };

  return (
    <>
      <div className="todolist-container">
        <h1 className="todolist-container-title ">TodoList</h1>
        <ToDoContent addNewToDo={addNewToDo} />
        <img
          src="./src/assets/business-to-do-list-flat-icon-modern-style-vector.jpg"
          alt="hok thay hinh"
          style={{}}
          className="todolist-container-img"
        />
        <ToDoData toDoList={toDoList} />
      </div>
    </>
  );
};

export default App;
