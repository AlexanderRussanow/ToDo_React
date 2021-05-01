import React from "react";
import { v1 } from "uuid";
import "./App.css";
import ToDoList from "./ToDoList";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type ChangeFilterTypes = "all" | "active" | "complieted";

type ToDoListType = {
  id: string;
  title: string;
  filter: ChangeFilterTypes;
};

type TaskStateType = {
  [key: string]: TaskType[];
};

function App() {
  const toDoList1 = v1();
  const toDoList2 = v1();

  const [toDoList, setToDoList] = React.useState<ToDoListType[]>([
    { id: toDoList1, title: "Whot to do", filter: "all" },
    { id: toDoList2, title: "Whot to learn", filter: "all" },
  ]);

  const [task, setTasks] = React.useState<TaskStateType>({
    [toDoList1]: [
      { id: v1(), title: "Kak pozivaes?", isDone: false },
      { id: v1(), title: "Kak dela?", isDone: true },
      { id: v1(), title: "Xhto ty sdelal dlja hip-hopa?", isDone: true },
      { id: v1(), title: "?????", isDone: true },
      { id: v1(), title: "Xhto ty, Xhto ty?", isDone: true },
      { id: v1(), title: "hip-hopa?", isDone: false },
    ],
    [toDoList2]: [
      { id: v1(), title: "?", isDone: false },
      { id: v1(), title: "sho", isDone: true },
      { id: v1(), title: "investice v kriptu", isDone: true },
      { id: v1(), title: "stavki na sport", isDone: true },
      { id: v1(), title: "bljaaa", isDone: true },
      { id: v1(), title: "slozno", isDone: false },
    ],
  });

  const delTask = (id: string, toDoId: string) => {
    const toDoList = task[toDoId];
    task[toDoId] = toDoList.filter((t) => t.id !== id);
    setTasks({ ...task });
  };
  const addTask = (title: string, toDoId: string) => {
    const newTask: TaskType = {
      id: v1(),
      title: title,
      isDone: false,
    };
    const toDoList = task[toDoId];
    task[toDoId] = [newTask, ...toDoList];
    setTasks({ ...task });
  };

  const changeTypeFilters = (value: ChangeFilterTypes, toDoId: string) => {
    const toDolistFiltr = toDoList.find((td) => td.id === toDoId);
    if (toDolistFiltr) {
      toDolistFiltr.filter = value;
      setToDoList([...toDoList]);
    }
  };

  const doneToggle = (id: string, isDone: boolean, toDoId: string) => {
    const toDoList = task[toDoId];
    const doneTask: TaskType | undefined = toDoList.find((t) => t.id === id);
    if (doneTask) {
      doneTask.isDone = isDone;
      setTasks({ ...task });
    }
  };

  const delToDoList = (id: string) => {
    setToDoList(toDoList.filter(t => t.id !== id))
    delete task[id]

  }

  return (
    <div className="App">
      {toDoList.map((t) => {
        let toDoListFilter = task[t.id]
        if (t.filter === 'active') {
          toDoListFilter = task[t.id].filter(t => t.isDone === false)
        }
        if (t.filter === 'complieted') {
          toDoListFilter = task[t.id].filter(t => t.isDone === true)
        }
        return (
          <ToDoList
            key={t.id}
            id={t.id}
            title={t.title}
            task={toDoListFilter}
            filter={t.filter}
            delTask={delTask}
            changeTypeFilters={changeTypeFilters}
            addTask={addTask}
            doneToggle={doneToggle}
            delToDoList={delToDoList}
          />
        );
      })}
    </div>
  );
}

export default App;

// const doneToggle = (id: string, isDone: boolean, toDoId: string) => {
// const doneTask: TaskType | undefined = task.find((t) => t.id === id);
// if (doneTask) {
//   doneTask.isDone = isDone;
//   setTasks([...task])
// }}

// const changeTypeFilters = (value: ChangeFilterTypes, toDoId: string) => {
// const newToffleTask = toDoList.map(t => {
//   if (t.id === id) {
//     return {...t, isDone: isDone}
//   } else {
//     return t
//   }
// })
// setTasks(newToffleTask)
// }

// let tasksForToDoList = task;
// if (filter === "active") {
//   tasksForToDoList = task.filter((t) => t.isDone === false);
// }
// if (filter === "complieted") {
//   tasksForToDoList = task.filter((t) => t.isDone === true);
// }
