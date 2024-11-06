const ToDoData = (props) => {
  console.log(props);
  const { toDoList } = props;
  return (
    <div className="todolist-container-data">
      {toDoList.map((item, index) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default ToDoData;
