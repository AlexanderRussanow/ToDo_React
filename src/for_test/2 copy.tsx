// import React from "react";
// import { FilterType } from "./1";

// export type TestArrayType = {
//   id: string;
//   name: string;
//   isComplieted: boolean;
// };

// type PropsType = {
//   task: TestArrayType[];
//   titlePage: string;
//   delTask: (id: string) => void
//   filterTask: (value: FilterType ) => void
// };

// export const TestToDo = (props: PropsType) => {
//    const [inputValue, setInputValue] = React.useState('')

//    const all = () => {props.filterTask('all')}
//    const done = () => {props.filterTask('done')}
//    const none = () => {props.filterTask('none')}
//    const tasks = props.task.map((t) => (
//       <li key={t.id}>
//         <input type="checkbox" checked={t.isComplieted} />
//         <span>{t.name}</span>
//         <button onClick={() => {props.delTask(t.id)}}>del task</button>
//       </li>
//     ))

//   return (
//     <div>
//       <h2>{props.titlePage}</h2>
//       <div>
//         <input type="text" placeholder="type here.."/>
//         <button>add task</button>
//       </div>
//       <ul>
//         {tasks}
//       </ul>
//       <div>
//         <button onClick={all}>all</button>
//         <button onClick={done}>coplieted</button>
//         <button onClick={none}>should be done</button>
//       </div>
//     </div>
//   );
// };

export {}