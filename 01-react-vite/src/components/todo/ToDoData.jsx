const ToDoData = (props) => {
  console.log(props);
  const { toDoList } = props;
  return (
    <div className="todolist-container-data">
      {toDoList.map((item, index) => {
        return (
          <div className="todolist-container-taskList">
            <p>{item.name}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoData;
