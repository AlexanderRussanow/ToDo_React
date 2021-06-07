import React, { ChangeEvent } from "react";

type PropsType = {
  action: (title: string) => void
}

const ModarateInput = (props: PropsType) => {
  const [taskInput, setTaskInput] = React.useState("");
  const [error, setError] = React.useState(false);

  const addTaskButton = () => {
    const trimedInput = taskInput.trim();
    if (trimedInput) {
      props.action(taskInput);
    } else {
      setError(true);
    }
    setTaskInput("");
  };

  const inputChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.currentTarget.value);
    setError(false);
  };

  return (
    <div>
      <input
        className={error ? "Error" : ""}
        type="text"
        value={taskInput}
        onChange={inputChanger}
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") addTaskButton();
        }}
      />
      <button onClick={addTaskButton}>Add</button>
      {error ? <div className="Error-message">Field is required!</div> : null}
    </div>
  );
};

export default ModarateInput;
