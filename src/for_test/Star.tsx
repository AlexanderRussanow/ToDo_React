import React from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type PropsStar = {
  selected: boolean;
  onClick: (value: ValueType) => void;
  value: ValueType;
};


type PropsRaiting = {
  value: ValueType;
  onClick: (value: ValueType) => void;
};

const Star = (props: PropsStar) => {
  return (
    <span onClick={() => props.onClick(props.value)}>
      {props.selected ? <b>Star </b> : "Star "}
    </span>
  );
};

const Raiting = (props: PropsRaiting) => {
  return (
    <div>
      <Star selected={props.value > 0} onClick={props.onClick} value={1} />
      <Star selected={props.value > 1} onClick={props.onClick} value={2} />
      <Star selected={props.value > 2} onClick={props.onClick} value={3} />
      <Star selected={props.value > 3} onClick={props.onClick} value={4} />
      <Star selected={props.value > 4} onClick={props.onClick} value={5} />
    </div>
  );
};

const Mapp = () => {
  const [raitingValue, setRaitingValue] = React.useState<ValueType>(0);

  return (
    <div>
      <Raiting value={raitingValue} onClick={setRaitingValue} />
    </div>
  );
};

export default Mapp;
