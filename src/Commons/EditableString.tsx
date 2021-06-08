import React from "react";

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

  return editMode ? (
    <input
      value={editor}
      autoFocus
      onBlur={offEditMode}
      onChange={(e) => setEditor(e.currentTarget.value)}
      onKeyPress={(e) => {
        if ((e.key === "Enter")) offEditMode();
      }}
    />
  ) : (
    <span onDoubleClick={onEditMode}>{props.title}</span>
  );
};

export default EditableString;


// type PropsType = {
//   spanText: string;
//   changeItem: (title: string) => void;
// };

// const EditName = (props: PropsType) => {
//   const [edit, setEdit] = React.useState(false);
//   const [text, setText] = React.useState<string>(props.spanText);

//   const offEdition = () => {
//     setEdit(false);
//     props.changeItem(text);
//   };

//   return edit ? (
//     <input
//       value={text}
//       autoFocus
//       onChange={(e) => setText(e.currentTarget.value)}
//       onBlur={offEdition}
//     />
//   ) : (
//     <span onDoubleClick={() => setEdit(true)}>{props.spanText}</span>
//   );
// };
