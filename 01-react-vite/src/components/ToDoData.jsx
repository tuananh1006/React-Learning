const ToDoData = (props) => {
  const { taskone, tasktwo, taskthree } = props.data;
  console.log(props);
  return (
    <div className="todolist-container-data">
      <p>{taskone}</p>
      <p>{tasktwo}</p>
      <p>{taskthree}</p>
    </div>
  );
};

export default ToDoData;
