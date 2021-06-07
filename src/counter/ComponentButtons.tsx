import React from "react";

// type PropsType = {
//   raiseButton: (count: number) => void;
//   resetButton: (count: number) => void;
// };

const ComponentButtons = () => {
  const [count, setCount] = React.useState(0);

  const raiseButton = () => setCount(count + 1);
  if (count === 5) {
    alert("warning! count is already 5!");
    setCount(0);
  }
  const resetButton = () => setCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={raiseButton}>Inc</button>
        <button onClick={resetButton}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentButtons;
