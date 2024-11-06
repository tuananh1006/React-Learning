import { useState } from "react";

const ToDoContent = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { addNewToDo } = props;

  const handleClick = () => {
    if (valueInput) {
      addNewToDo(valueInput);
      setValueInput("");
    }
  };

  const handleOnChange = (event) => {
    setValueInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (valueInput) {
      if (event.key === "Enter") {
        addNewToDo(valueInput);
        setValueInput("");
      }
    }
  };

  return (
    <div className="todolist-container-content">
      <input
        type="text"
        className="todolist-container-task-input"
        placeholder="Enter Your Task"
        value={valueInput}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown} // Thay bằng onKeyDown
      />
      <input
        type="submit"
        className="todolist-container-input-button"
        value="Add"
        onClick={handleClick}
      />
      <div>Value in input is: {valueInput}</div>
    </div>
  );
};

export default ToDoContent;
