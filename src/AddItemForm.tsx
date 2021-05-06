import React, { ChangeEvent } from "react";

type AddItemFormType = {
   addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormType) => {
  const [title, setTitle] = React.useState("");
  const [error, setError] = React.useState(false);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setError(false);
  };
  const itemAdd = () => {
    const trimTitle = title.trim();
    if (trimTitle) {
      props.addItem(trimTitle);
    } else {
      setError(true);
    }
    setTitle("");
  };

  return (
    <div>
      <input
        className={error ? "Error" : ""}
        value={title}
        onChange={changeTitle}
        onKeyPress={(e) => {
          if (e.key === "Enter") itemAdd();
        }}
        onBlur={() => setError(false)}
      />
      <button onClick={itemAdd}>+</button>
      {error && <div className="Error-message"><b>Title is required!</b></div>}
    </div>
  );
};

export default AddItemForm;
