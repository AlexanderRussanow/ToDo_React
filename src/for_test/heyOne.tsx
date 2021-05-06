import React, { ChangeEvent } from "react";
import { v1 } from "uuid";
import "./../App.css";
import Concorde from "./heyTwo";

export type FilterType = "all" | "done" | "none";
export type ListType = {
  key: string;
  name: string;
  done: boolean;
};
export type ListsType = {
  id: string;
  name: string;
  filter: FilterType;
};
export type TodoListType = {
  [id: string]: ListType[];
};

const TodoApp = () => {
  const first = v1();
  const second = v1();
  const third = v1();

  const [listy, setListy] = React.useState<ListsType[]>([
    { id: first, name: "first", filter: "all" },
    { id: second, name: "second", filter: "all" },
    { id: third, name: "third", filter: "all" },
  ]);

  const [list, setList] = React.useState<TodoListType>({
    [first]: [
      { key: v1(), name: "hdhshsh", done: false },
      { key: v1(), name: "11111", done: false },
      { key: v1(), name: "h22222sh", done: false },
      { key: v1(), name: "h333333sh", done: true },
      { key: v1(), name: "hd444444h", done: false },
    ],
    [second]: [
      { key: v1(), name: "hdhshsh", done: false },
      { key: v1(), name: "11111", done: false },
      { key: v1(), name: "h22222sh", done: false },
      { key: v1(), name: "h333333sh", done: true },
      { key: v1(), name: "hd444444h", done: false },
    ],
    [third]: [
      { key: v1(), name: "hdhshsh", done: false },
      { key: v1(), name: "11111", done: false },
      { key: v1(), name: "h22222sh", done: false },
      { key: v1(), name: "h333333sh", done: true },
      { key: v1(), name: "hd444444h", done: false },
    ],
  });

  const addListItem = (name: string, caseId: string) => {
    const updateList = list[caseId];
    const newList = {
      key: v1(),
      name: name,
      done: false,
    };
    list[caseId] = [newList, ...updateList];
    setList({ ...list });
  };

  const delListItem = (id: string, caseId: string) => {
    const updateList = list[caseId];
    list[caseId] = updateList.filter((l) => l.key !== id);
    setList({ ...list });
  };

  const ttttt = (id: string, toggle: boolean, caseId: string) => {
    const updateList = list[caseId];
    const rrrrrr = updateList.find((l) => l.key === id);
    if (rrrrrr) {
      rrrrrr.done = toggle;
      setList({ ...list });
    }
  };

  const filterList = (value: FilterType, caseId: string) => {
    const updateList = listy.find((l) => l.id === caseId);
    if (updateList) {
      updateList.filter = value;
      setListy([...listy]);
    }
  };

  const delList = (caseId: string) => {
    setListy(listy.filter(f => f.id !== caseId))
    delete list[caseId]

  }

  return (
    <div>
      {listy.map((l) => {
         let filteredLists = list[l.id]
         if (l.filter === 'done') {
            filteredLists = list[l.id].filter(f => f.done === true)
         }
         if (l.filter === 'none') {
            filteredLists = list[l.id].filter(f => f.done === false)
         }
        return (
          <Concorde
            key={l.id}
            id={l.id}
            title={l.name}
            filter={l.filter}
            tasks={filteredLists}
            addListItem={addListItem}
            delListItem={delListItem}
            ttttt={ttttt}
            filterList={filterList}
            delList={delList}
          />
        );
      })}
    </div>
  );
};

export default TodoApp;
