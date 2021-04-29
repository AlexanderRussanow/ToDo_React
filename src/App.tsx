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

function App() {
  const [task, setTasks] = React.useState<TaskType[]>([
    { id: v1(), title: "Kak pozivaes?", isDone: false },
    { id: v1(), title: "Kak dela?", isDone: true },
    { id: v1(), title: "Xhto ty sdelal dlja hip-hopa?", isDone: true },
    { id: v1(), title: "?????", isDone: true },
    { id: v1(), title: "Xhto ty, Xhto ty?", isDone: true },
    { id: v1(), title: "hip-hopa?", isDone: false },
  ]);
  const [filter, setFilter] = React.useState<ChangeFilterTypes>("all");

  const delTask = (id: string) => {
    setTasks(task.filter((t) => t.id !== id));
  };

  const changeTypeFilters = (value: ChangeFilterTypes) => {
    setFilter(value);
  };

  const addTask = (title: string) => {
    const newTask: TaskType = {
      id: v1(),
      title: title,
      isDone: false,
    };
    const updateTask = [newTask, ...task];
    setTasks(updateTask);
  };
  const doneToggle = (id: string, isDone: boolean) => {

    // const doneTask: TaskType | undefined = task.find((t) => t.id === id);
    // if (doneTask) {
    //   doneTask.isDone = isDone;
    //   setTasks([...task])
    // }
    const newToffleTask = task.map(t => {
      if (t.id === id) {
        return {...t, isDone: isDone}
      } else {
        return t
      }
    })
    setTasks(newToffleTask)
  };

 
  let tasksForToDoList = task;
  if (filter === "active") {
    tasksForToDoList = task.filter((t) => t.isDone === false);
  }
  if (filter === "complieted") {
    tasksForToDoList = task.filter((t) => t.isDone === true);
  }

  return (
    <div className="App">
      <ToDoList
        title={"To Do list title"}
        task={tasksForToDoList}
        filter={filter}
        delTask={delTask}
        changeTypeFilters={changeTypeFilters}
        addTask={addTask}
        doneToggle={doneToggle}
      />
    </div>
  );
}

export default App;
