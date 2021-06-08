import React, { ChangeEvent } from "react";

type CommonInputType = {
  actionInput: (title: string) => void;
};

const CommonInput: React.FC<CommonInputType> = ({ actionInput }) => {
  const [title, setTitle] = React.useState("");
  const [error, setError] = React.useState(false);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setError(false);
  };
  const addButton = () => {
    const trimTitle = title.trim();
    if (trimTitle) {
      actionInput(trimTitle);
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
          if (e.key === "Enter") addButton();
        }}
        onBlur={() => setError(false)}
      />
      <button onClick={addButton}>+</button>
      {error && (
        <div className="Error-message">
          <b>Title is required!</b>
        </div>
      )}
    </div>
  );
};

export default CommonInput;


// type PropsType = {
//   addButton: (title: string) => void;
// };

// const InputItemInstance = (props: PropsType) => {
//   const [text, setText] = React.useState("");
//   const [error, setError] = React.useState(false);

//   const addButton = () => {
//     const checkedText = text.trim();
//     if (checkedText) {
//       props.addButton(checkedText);
//     } else {
//       setError(true);
//     }
//     setText("");
//   };

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
//       <button onClick={addButton}>Add</button>
//       {error ? <div>Field is requried!</div> : null}
//     </div>
//   );
// };
