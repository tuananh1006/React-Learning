const ToDoData = (props) => {
  const { deleteToDo } = props;
  const { toDoList } = props;
  return (
    <div className="todolist-container-data">
      {toDoList.map((item, index) => {
        return (
          <div className="todolist-container-taskList" key={`${item.id}`}>
            <p>{item.name}</p>
            <button onClick={() => deleteToDo(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoData;
