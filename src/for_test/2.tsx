import React, { ChangeEvent } from "react";
import './../App.css'
import { FilterType } from "./1";

export type TestArrayType = {
  id: string;
  name: string;
  isComplieted: boolean;
};

type PropsType = {
  tasks: TestArrayType[];
  titlePage: string;
  addNewTaskButton: (title: string) => void
  delButton: (id: string) => void
  filterButton: (value: FilterType) => void
  filter: FilterType
  doneButton: (id: string, doneToggle: boolean) => void
};

export const TestToDo = (props: PropsType) => {
  const [inputTask, setInputTask] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)
  

  const all = () => props.filterButton('all')
  const done = () => props.filterButton('done')
  const none = () => props.filterButton('none')

  const addButton = () => {
    const trimTask = inputTask.trim()
    if (trimTask) {
      props.addNewTaskButton(trimTask)
    } else {
      setError("Field is required!")
    }
    setInputTask('')
  }

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.currentTarget.value)
    setError('')
  }

   const tasks = props.tasks.map((t) => {
    const deletteButton = () => {props.delButton(t.id)}
     return (
      <li key={t.id} className={t.isComplieted === true ? 'isdone' : ''}>
        <input type="checkbox" checked={t.isComplieted} onChange={(e) => {props.doneButton(t.id, e.currentTarget.checked)}}/>
        <span>{t.name}</span>
        <button onClick={deletteButton}>del task</button>
      </li>)
    })
  return (
    <div>
      <h2>{props.titlePage}</h2>
      <div>
        <input className={error ? 'Error' : ''} type="text" placeholder="type here.." value={inputTask} onChange={inputChange} onKeyPress={(e) => {if(e.key === 'Enter') addButton()}} />
        <button onClick={addButton}>add task</button>
        {error && <div className='Error-message'><b>{error}</b></div> }
      </div>
      <ul>
        {tasks}
      </ul>
      <div>
        <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={all} >all</button>
        <button className={props.filter === 'done' ? 'active-filter' : ''} onClick={done} >coplieted</button>
        <button className={props.filter === 'none' ? 'active-filter' : ''} onClick={none} >should be done</button>
      </div>
    </div>
  );
};
