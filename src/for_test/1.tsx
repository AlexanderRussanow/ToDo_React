// import React from "react";
// import { v1 } from "uuid";
// import { TestArrayType, TestToDo } from "./2";

// export type FilterType = 'all' | 'done' | 'none'

// const TestApp = () => {
//   const [testArray, setTestArray] = React.useState([
//     { id: v1(), name: "blablabla", isComplieted: false },
//     { id: v1(), name: "blablabla", isComplieted: true },
//     { id: v1(), name: "blablabla", isComplieted: false },
//     { id: v1(), name: "blablabla", isComplieted: true },
//     { id: v1(), name: "blablabla", isComplieted: false },
//     { id: v1(), name: "blablabla", isComplieted: false },
//   ]);

//   const [filter, setFilter] = React.useState<FilterType>('all')

//   let filteredTestArray = testArray
//   if (filter === 'done') {
//     filteredTestArray = testArray.filter(t => t.isComplieted !== false)
//   }
//   if (filter === 'none') {
//     filteredTestArray = testArray.filter(t => t.isComplieted !== true)
//   }

//   const addNewTaskButton = (title: string) => {
//     const newTask:TestArrayType = {
//       id: v1(),
//       name: title,
//       isComplieted: false
//     }
//     setTestArray([newTask, ...testArray])
//   }

//   const delButton = (id: string) => {
//     setTestArray(testArray.filter(t => t.id !== id))
//   }

//   const filterButton = (value: FilterType) => {
//     setFilter(value)
//   }

//   const doneButton = (id: string, doneToggle: boolean) => {
//     const doneTask = testArray.map(t => {
//       if (t.id === id) {
//         return {...t, isComplieted: doneToggle}
//       } else {
//         return t
//       }
//     })
//     setTestArray(doneTask)
//   }

//   return (
//     <TestToDo
//       tasks={filteredTestArray}
//       titlePage={"heey is' a new test"}
//       addNewTaskButton={addNewTaskButton}
//       delButton={delButton}
//       filterButton={filterButton}
//       filter={filter}
//       doneButton={doneButton}
//       />
//   );
// };

// export default TestApp;

export {}