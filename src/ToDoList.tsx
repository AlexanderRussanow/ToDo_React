import React, { ChangeEvent } from "react";
import AddItemForm from "./AddItemForm";
import { ChangeFilterTypes, TaskType } from "./App";
import "./App.css";
import EditTableSpan from "./EditTableSpan";

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
  const AddTaskItems = (title: string) => props.addTask(title, props.id);

  const all = () => props.changeTypeFilters("all", props.id);
  const active = () => props.changeTypeFilters("active", props.id);
  const complieted = () => props.changeTypeFilters("complieted", props.id);

  const tasks = props.task.map((t) => {
    const changeTaskTitle = (title: string) =>
      props.changeTaskTitle(t.id, title, props.id);
    const delTask = () => props.delTask(t.id, props.id);
    const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
      props.doneToggle(t.id, e.currentTarget.checked, props.id);
    };
    return (
      <li key={t.id} className={t.isDone ? "isdone" : ""}>
        <input type="checkbox" checked={t.isDone} onChange={changeToggle} />
        <EditTableSpan title={t.title} changeItem={changeTaskTitle} />
        <button onClick={delTask}>X</button>
      </li>
    );
  });

  const delTodoList = () => props.delToDoList(props.id);

  return (
    <div>
      <h3>
        <EditTableSpan title={props.title} changeItem={(title) => props.changeTodoListTitle(title, props.id)} />
        <button onClick={delTodoList}>del list</button>
      </h3>
      <div>
        <AddItemForm addItem={AddTaskItems} />
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
