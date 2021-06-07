import React, { ChangeEvent } from "react";
import { TaskiType, FilterzType } from "./heyOne";
import "./../App.css";
import EditableBle from "./heyThree";
import ModarateInput from "./heyFour";

type PropsType = {
  tasks: TaskiType[];
  id: string;
  editFilter: (mListId: string, filterValue: FilterzType) => void;
  title: string;
  delTask: (mListId: string, taskId: string) => void;
  addTask: (mListId: string, titleName: string) => void;
  doneToggle: (mListId: string, taskId: string, toggle: boolean) => void;
  filter: FilterzType;
  editableTaskName: (
    mListId: string,
    taskId: string,
    newTaskName: string
  ) => void;
  editableManeListName: (mListId: string, newSpan: string) => void;
  delMainList: (mListId: string) => void
};

const Seznam = (props: PropsType) => {
  const forTaskAdding = (titleName: string) => props.addTask(props.id, titleName)

  const task = props.tasks.map((t) => {
    const delButtonTask = () => props.delTask(props.id, t.id);
    const spanForEdition = (newSpan: string) =>
      props.editableTaskName(props.id, t.id, newSpan);
    return (
      <li>
        <EditableBle span={t.titleName} action={spanForEdition} />
        <input
          type="checkbox"
          checked={t.doneOrNote}
          onChange={(e) =>
            props.doneToggle(props.id, t.id, e.currentTarget.checked)
          }
        />
        <button onClick={delButtonTask}>X</button>
      </li>
    );
  });

  
  const editorTitle = (newSpan: string) =>
    props.editableManeListName(props.id, newSpan);

  return (
    <div>
      <h3>
        <EditableBle span={props.title} action={editorTitle} />
        <button onClick={() => props.delMainList(props.id)}>X</button>
      </h3>
      <div>
       <ModarateInput action={forTaskAdding}/>
      </div>
      <ul>{task}</ul>
      <button
        className={props.filter === "all" ? "active-filter" : ""}
        onClick={() => props.editFilter(props.id, "all")}
      >
        all
      </button>
      <button
        className={props.filter === "none" ? "active-filter" : ""}
        onClick={() => props.editFilter(props.id, "none")}
      >
        none
      </button>
      <button
        className={props.filter === "done" ? "active-filter" : ""}
        onClick={() => props.editFilter(props.id, "done")}
      >
        done
      </button>
      
    </div>
  );
};

export default Seznam;
