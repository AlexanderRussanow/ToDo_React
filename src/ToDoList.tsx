import React, { ChangeEvent } from "react";
import CommonInput from "./Commons/CommonInput";
import { ChangeFilterTypes, TaskType } from "./App";
import "./App.css";
import EditableString from "./Commons/EditableString";
import { Button, Checkbox, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

type ToDoListPropsType = {
  id: string;
  title: string;
  filter: ChangeFilterTypes;
  task: TaskType[];
  delTask: (id: string, toDoId: string) => void;
  changeTypeFilters: (newValue: ChangeFilterTypes, toDoId: string) => void;
  addTask: (title: string, toDoId: string) => void;
  doneToggle: (id: string, isDone: boolean, toDoId: string) => void;
  delToDoList: (id: string) => void;
  changeTaskTitle: (id: string, title: string, todoId: string) => void;
  changeTodoListTitle: (title: string, todoId: string) => void;
};

const ToDoList = (props: ToDoListPropsType) => {
  const addTask = (title: string) => props.addTask(title, props.id);

  const all = () => props.changeTypeFilters("all", props.id);
  const active = () => props.changeTypeFilters("active", props.id);
  const complieted = () => props.changeTypeFilters("complieted", props.id);

  const delTodoList = () => props.delToDoList(props.id);

  const changeToDoTitle = (title: string) =>
    props.changeTodoListTitle(title, props.id);

  const tasks = props.task.map((t) => {
    const changeTaskTitle = (title: string) =>
      props.changeTaskTitle(t.id, title, props.id);
    const delTask = () => props.delTask(t.id, props.id);
    const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
      props.doneToggle(t.id, e.currentTarget.checked, props.id);
    };
    return (
      <li key={t.id} className={t.isDone ? "isdone" : ""}>
        <Checkbox  checked={t.isDone} onChange={changeToggle}/>
        {/* <input type="checkbox" checked={t.isDone} onChange={changeToggle} /> */}
        <EditableString title={t.title} changer={changeTaskTitle} />
        {/* <button onClick={delTask}>X</button> */}
        <IconButton onClick={delTask} aria-label="delete">
          <Delete />
        </IconButton>
      </li>
    );
  });

  return (
    <div>
      <h3>
        <EditableString title={props.title} changer={changeToDoTitle} />
        {/* <button onClick={}>del list</button> */}
        <IconButton onClick={delTodoList} aria-label="delete">
          <Delete />
        </IconButton>
      </h3>
      <div>
        <CommonInput actionInput={addTask} />
      </div>
      <ul style={{listStyle: 'none', paddingLeft: '0'}}>{tasks}</ul>
      <div>
        <Button
          color={props.filter === "all" ? "secondary" : "primary"}
          variant="contained"
          size="small"
          // className={props.filter === "all" ? "active-filter" : ""}
          onClick={all}
        >
          All
        </Button>
        <Button
          variant="contained"
          size="small"
          color={props.filter === "active" ? "secondary" : "primary"}
          // className={props.filter === "active" ? "active-filter" : ""}
          onClick={active}
        >
          Active
        </Button>
        <Button
          variant="contained"
          size="small"
          color={props.filter === "complieted" ? "secondary" : "primary"}
          // className={props.filter === "complieted" ? "active-filter" : ""}
          onClick={complieted}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default ToDoList;
