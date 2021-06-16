import { TextField } from "@material-ui/core";
import React, { KeyboardEvent } from "react";

type EditTableSpanType = {
  title: string;
  changer: (title: string) => void;
};

const EditableString = (props: EditTableSpanType) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editor, setEditor] = React.useState<string>(props.title);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => {
    setEditMode(false);
    props.changer(editor);
  };

  const keyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') offEditMode()
  }

  return editMode ? (
    // <input
    //   value={editor}
    //   autoFocus
    //   onBlur={offEditMode}
    //   onChange={(e) => setEditor(e.currentTarget.value)}
    //   onKeyPress={(e) => {
    //     if ((e.key === "Enter")) offEditMode();
    //   }}
    // />
    <TextField
      variant={"filled"}
      value={editor}
      autoFocus
      onBlur={offEditMode}
      onChange={(e) => setEditor(e.currentTarget.value)}
      onKeyPress={keyPress}
      label={'Edit task'}
    />
  ) : (
    <span onDoubleClick={onEditMode}>{props.title}</span>
  );
};

export default EditableString;
