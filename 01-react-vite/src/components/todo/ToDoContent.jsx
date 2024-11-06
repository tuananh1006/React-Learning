import { useState } from "react";

const ToDoContent = (props) => {
  const [valueInput, setValueInput] = useState("Tuan Anh");

  const handleClick = (event) => {
    alert(valueInput);
  };

  const handleOnChange = (event) => {
    setValueInput(event.target.value);
  };
  //UseState Hook

  // const valueInput="";
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
      <div>Value in input is:{valueInput}</div>
    </div>
  );
};

export default ToDoContent;
