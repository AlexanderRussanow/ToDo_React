import React, { ChangeEvent } from "react";
import { ChangeFilterTypes, TaskType } from "./App";
import "./App.css";

type ToDoListPropsType = {
  title: string;
  filter: ChangeFilterTypes;
  task: TaskType[];
  delTask: (id: string) => void;
  changeTypeFilters: (newValue: ChangeFilterTypes) => void;
  addTask: (title: string) => void;
  doneToggle: (id: string, isDone: boolean) => void;
};

const ToDoList = (props: ToDoListPropsType) => {
  const [title, setTitle] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const all = () => {
    props.changeTypeFilters("all");
  };
  const active = () => {
    props.changeTypeFilters("active");
  };
  const complieted = () => {
    props.changeTypeFilters("complieted");
  };
  const taskAdd = () => {
    const trimTitle = title.trim();
    if (trimTitle) {
      props.addTask(trimTitle);
    } else {
      setError("Fiels is required!");
    }
    setTitle("");
  };
  const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setError(null)
  }

  const tasks = props.task.map((t) => {
    const delTask = () => props.delTask(t.id);
    const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
      props.doneToggle(t.id, e.currentTarget.checked);
    };
    return (
      <li key={t.id} className={t.isDone ? "isdone" : ""}>
        <input type="checkbox" checked={t.isDone} onChange={changeToggle} />
        <span>{t.title}</span>
        <button onClick={delTask}>X</button>
      </li>
    );
  });

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          className={error ? "Error" : ""}
          value={title}
          onChange={changeToggle}
          onKeyPress={(e) => {
            if (e.key === "Enter") taskAdd();
          }}
        />
        <button onClick={taskAdd}>+</button>
        {error && <div>{error}</div> }
      </div>
      <ul>{tasks}</ul>
      <div>
        <button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={all}
        >
          All
        </button>
        <button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={active}
        >
          Active
        </button>
        <button
          className={props.filter === "complieted" ? "active-filter" : ""}
          onClick={complieted}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
