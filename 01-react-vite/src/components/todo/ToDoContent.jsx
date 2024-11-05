const ToDoContent = () => {
  return (
    <div className="todolist-container-content">
      <input
        type="text"
        className="todolist-container-task-input "
        placeholder="Enter Your Task"
      />
      <input
        type="submit"
        className="todolist-container-input-button"
        value={"Add"}
      />
    </div>
  );
};

export default ToDoContent;
