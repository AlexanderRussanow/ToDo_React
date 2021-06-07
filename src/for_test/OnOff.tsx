import React from "react";

type PropsType = {
  toggle: Boolean;
};

const OnOffComponent = (props: PropsType) => {
  const [onToggle, setOnToggle] = React.useState(props.toggle);

  const onStyle = {
    width: "25px",
    height: "25px",
    border: "2px solid black",
    color: "red",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: onToggle ? "green" : "white",
  };
  const offStyle = {
    width: "25px",
    height: "25px",
    border: "2px solid black",
    backgroundColor: !onToggle ? "red" : "white",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
  };
  const indicatorStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    margin: "5px",
    padding: "5px",
    backgroundColor: onToggle ? "green" : "red",
  };

  const saveRef = React.useRef<HTMLInputElement>(null);

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOnToggle(!onToggle);
        }}
      >
        on
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOnToggle(!onToggle);
        }}
      >
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

export default OnOffComponent;
