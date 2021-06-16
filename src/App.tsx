import React from "react";
import { v1 } from "uuid";
import CommonInput from "./Commons/CommonInput";
import "./App.css";
import ToDoList from "./ToDoList";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export type ChangeFilterTypes = "all" | "active" | "complieted";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type ListType = {
  id: string;
  title: string;
  filter: ChangeFilterTypes;
};

type GlobalTaskType = {
  [key: string]: TaskType[];
};

function App() {
  const FIRST = v1();
  const SECOND = v1();

  const [toDoList, setToDoList] = React.useState<ListType[]>([
    { id: FIRST, title: "What to do", filter: "all" },
    { id: SECOND, title: "What to learn", filter: "all" },
  ]);

  const [task, setTasks] = React.useState<GlobalTaskType>({
    [FIRST]: [
      { id: v1(), title: "Start up", isDone: false },
      { id: v1(), title: "Cash in", isDone: true },
      { id: v1(), title: "Sell out", isDone: true },
      { id: v1(), title: "Bro down", isDone: true },
      { id: v1(), title: "????", isDone: true },
      { id: v1(), title: "!!!!", isDone: false },
    ],
    [SECOND]: [
      { id: v1(), title: "JS", isDone: false },
      { id: v1(), title: "TS", isDone: true },
      { id: v1(), title: "React JS", isDone: true },
      { id: v1(), title: "Redux", isDone: true },
      { id: v1(), title: "Redux Thunk", isDone: true },
      { id: v1(), title: "Redux Saga", isDone: false },
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
    setToDoList(toDoList.filter((t) => t.id !== id));
    delete task[id];
  };

  const addToDoList = (title: string) => {
    const newToDoId = v1();
    const newToDoList: ListType = {
      id: newToDoId,
      title: title,
      filter: "all",
    };
    setToDoList([newToDoList, ...toDoList]);
    setTasks({ ...task, [newToDoId]: [] });
  };

  const changeTaskTitle = (id: string, title: string, todoId: string) => {
    const findThatList = task[todoId];
    const findTask = findThatList.find((t) => t.id === id);
    if (findTask) {
      findTask.title = title;
      setTasks({ ...task });
    }
  };

  const changeTodoListTitle = (title: string, todoId: string) => {
    const findList = toDoList.find((td) => td.id === todoId);
    if (findList) {
      findList.title = title;
      setToDoList([...toDoList]);
    }
  };

  const toDoMap = toDoList.map((t) => {
    let toDoListFilter = task[t.id];
    if (t.filter === "active") {
      toDoListFilter = task[t.id].filter((t) => t.isDone === false);
    }
    if (t.filter === "complieted") {
      toDoListFilter = task[t.id].filter((t) => t.isDone === true);
    }
    return (
      <Grid item key={t.id}>
        <Paper elevation={10} style={{padding: '20px'}}>
        <ToDoList
          id={t.id}
          title={t.title}
          task={toDoListFilter}
          filter={t.filter}
          delTask={delTask}
          changeTypeFilters={changeTypeFilters}
          addTask={addTask}
          doneToggle={doneToggle}
          delToDoList={delToDoList}
          changeTaskTitle={changeTaskTitle}
          changeTodoListTitle={changeTodoListTitle}
        /></Paper>
      </Grid>
    );
  });

  return (
    <div className="App">
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
            <Menu />
          </IconButton>
          <Typography variant={"h6"}>To-Do List</Typography>
          <Button color={"inherit"}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid>
          <h3>Create new To-Do</h3>
        </Grid>
        <Grid container style={{ padding: "5px 1px 10px" }}>
          <CommonInput actionInput={addToDoList} />
        </Grid>
        <Grid container spacing={4}>
          {toDoMap}
        </Grid>
      </Container>
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
