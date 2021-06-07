import React from "react";

type AccTitleType = {
  name: string;
  onChange: () => void
};

type AccType = {
  name: string;
  collapsed: boolean;
  onChange: () => void;
};

const AccTitle = (props: AccTitleType) => {
  return <h3 onClick={props.onChange}>{props.name}</h3>;
};

const AccBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

const Acc = (props: AccType) => {
  return (
    <div>
      <AccTitle name={props.name} onChange={props.onChange}/>
      {!props.collapsed && <AccBody />}
    </div>
  );
};

const AccApp = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Acc
      name={"Menu"}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};

export default AccApp;
