import React from "react";
import { v1 } from "uuid";
import Seznam from "./heyTwo";
import "./../App.css";
import ModarateInput from "./heyFour";

export type TaskiType = {
  id: string;
  titleName: string;
  doneOrNote: boolean;
};

export type ListsType = {
  position: string;
  name: string;
  filter: FilterzType;
};

export type TaskssType = {
  [task: string]: TaskiType[];
};

export type FilterzType = "all" | "none" | "done";

const Dapp = () => {
  const firstOne = v1();
  const secondOne = v1();
  const thirdOne = v1();

  const [maineList, setMaineList] = React.useState<ListsType[]>([
    { position: firstOne, name: "first", filter: "all" },
    { position: secondOne, name: "first", filter: "all" },
    { position: thirdOne, name: "first", filter: "all" },
  ]);

  const [taskss, setTaskss] = React.useState<TaskssType>({
    [firstOne]: [
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
    ],
    [secondOne]: [
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
    ],
    [thirdOne]: [
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
      { id: v1(), titleName: "ghfgdhh", doneOrNote: false },
    ],
  });

  const editFilter = (mListId: string, filterValue: FilterzType) => {
    const findList = maineList.find((ml) => ml.position === mListId);
    if (findList) {
      findList.filter = filterValue;
      setMaineList([...maineList]);
    }
  };

  const delTask = (mListId: string, taskId: string) => {
    const findList = taskss[mListId]
    taskss[mListId] = findList.filter(t => t.id !== taskId)
    setTaskss({...taskss})
  }

  const addTask = (mListId: string, titleName: string) => {
    const findList = taskss[mListId]
    const newTask = {
      id: v1(),
      titleName: titleName,
      doneOrNote: false
    }
    taskss[mListId] = [newTask, ...findList]
    setTaskss({...taskss})
  }

  const doneToggle = (mListId: string, taskId: string, toggle: boolean) => {
    const findList = taskss[mListId]
    const findTask = findList.find(t => t.id === taskId) 
    if (findTask) {
      findTask.doneOrNote = toggle
      setTaskss({...taskss})
    }
  }

  const editableTaskName = (mListId: string, taskId: string, newTaskName: string) => {
    const findList = taskss[mListId]
    const findTask = findList.find(t => t.id === taskId) 
    if (findTask) {
      findTask.titleName = newTaskName
      setTaskss({...taskss})
    }
  }

  const editableManeListName = (mListId: string, newSpan: string) => {
    const findList = maineList.find(l => l.position === mListId)
    if (findList) {
      findList.name = newSpan
      setMaineList([...maineList])
    }
  }

  const addNewMainList = (name: string) => {
    const newId = v1()
    const newList: ListsType = {
      position: newId,
      name: name,
      filter: 'all'
    }
    setMaineList([newList, ...maineList])
    setTaskss({...taskss, [newId]: []})
  }

  const delMainList = (mListId: string) => {
    setMaineList(maineList.filter(l => l.position !== mListId))
  }

  return (
    <div className='App'>
      <ModarateInput action={addNewMainList}/>
      {maineList.map((l) => {
        let filtered = taskss[l.position];
        if (l.filter === "done") {
          filtered = taskss[l.position].filter((t) => t.doneOrNote === true);
        }
        if (l.filter === "none") {
          filtered = taskss[l.position].filter((t) => t.doneOrNote === false);
        }
        return (
          <Seznam
            title={l.name}
            id={l.position}
            tasks={filtered}
            editFilter={editFilter}
            delTask={delTask}
            addTask={addTask}
            doneToggle={doneToggle}
            filter={l.filter}
            editableTaskName={editableTaskName}
            editableManeListName={editableManeListName}
            delMainList={delMainList}
          />
        );
      })}
    </div>
  );
};

export default Dapp;
