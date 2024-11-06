const ToDoContent = (props) => {
  const { addNewToDo } = props;
  const handleClick = () => {
    console.log("I'm clicked");
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="todolist-container-content">
      <input
        type="text"
        className="todolist-container-task-input "
        placeholder="Enter Your Task"
        onChange={handleOnChange}
      />
      <input
        type="submit"
        className="todolist-container-input-button"
        value={"Add"}
        onClick={handleClick}
      />
    </div>
  );
};

export default ToDoContent;
