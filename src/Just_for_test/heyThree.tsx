import React from "react";

type PropsType = {
  span: string;
  action: (newSpan: string) => void;
};

const EditableBle = (props: PropsType) => {
  const [editMode, setEditMode] = React.useState(false);
  const [input, setInput] = React.useState(props.span);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => {
    props.action(input);
    setEditMode(false)
  };

  return editMode ? (
    <input
      autoFocus
      value={input}
      onChange={(e) => setInput(e.currentTarget.value)}
      onBlur={offEditMode}
      onKeyPress={(e) => {
        if (e.key === "Enter") offEditMode();
      }}
    />
  ) : (
    <span onDoubleClick={onEditMode}>{props.span}</span>
  );
};

export default EditableBle;
