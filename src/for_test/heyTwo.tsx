import React, { ChangeEvent } from "react";
import { FilterType, ListType } from "./heyOne";

type PropsType = {
  id: string;
  title: string;
  filter: FilterType;
  tasks: ListType[];
  addListItem: (name: string, caseId: string) => void;
  delListItem: (id: string, caseId: string) => void;
  ttttt: (id: string, toggle: boolean, caseId: string) => void;
  filterList: (value: FilterType, caseId: string) => void;
  delList: (caseId: string) => void
};

const Concorde = (props: PropsType) => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const all = () => props.filterList("all", props.id);
  const done = () => props.filterList("done", props.id);
  const none = () => props.filterList("none", props.id);
  const inputButton = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    setError("");
  };
  const addButton = () => {
    const trimValue = input.trim();
    if (trimValue) {
      props.addListItem(trimValue, props.id);
    } else {
      setError("Field is required");
    }
    setInput("");
  };
  const tasks = props.tasks.map(t => {
     const delll = () => props.delListItem(t.key, props.id)
        return (
           <li>
              <span>{t.name}</span>
              <input type="checkbox" checked={t.done} onChange={e => props.ttttt(t.key, e.currentTarget.checked, props.id)}/>
              <button onClick={delll}>Del</button>
           </li>
        )
     })

  return (
    <div>
      <h3>{props.title} <button onClick={() => props.delList(props.id)}>Del</button> </h3>
      <div>
        <input
          className={error ? "Error" : ""}
          value={input}
          onChange={inputButton}
          onKeyPress={(e) => {
            if (e.key === "Enter") addButton()}}
        />
        <button onClick={addButton}>+</button>
        {error ? <div className="Error-message">{error}</div> : null}
      </div>
      <ul>
        {tasks}
      </ul>
      <div>
        <button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={all}
        >
          all
        </button>
        <button
          className={props.filter === "done" ? "active-filter" : ""}
          onClick={done}
        >
          done
        </button>
        <button
          className={props.filter === "none" ? "active-filter" : ""}
          onClick={none}
        >
          none
        </button>
      </div>
    </div>
  );
};

export default Concorde;
