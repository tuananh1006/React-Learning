const ToDoData = (props) => {
  console.log(props);
  const { toDoList } = props;
  return (
    <div className="todolist-container-data">
      {toDoList.map((item, index) => {
        return (
          <div className="todolist-container-taskList" key={`${item.id}`}>
            <p>{item.name}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoData;
