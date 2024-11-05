import ToDoData from "./components/ToDoData";
import ToDoContent from "./components/todo/ToDoContent";
import "./components/todo/todo.css";
const data = {
  taskone: "Sleeping",
  tasktwo: "Learn React",
  taskthree: "Eating hihi",
};
const App = () => {
  return (
    <>
      <div className="todolist-container">
        <h1 className="todolist-container-title ">TodoList</h1>
        <ToDoContent />
        <img
          src="./src/assets/business-to-do-list-flat-icon-modern-style-vector.jpg"
          alt="hok thay hinh"
          style={{}}
          className="todolist-container-img"
        />
        <ToDoData data={data} />
      </div>
    </>
  );
};

export default App;
