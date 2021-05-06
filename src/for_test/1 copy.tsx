import React from "react";
import { v1 } from "uuid";
import { TestArrayType, TestToDo } from "./2 copy";

export type FilterType = 'all' | 'done' | 'none'

const TestttApp = () => {
  const [testArray, setTestArray] = React.useState<TestArrayType[]>([
    { id: v1(), name: "blablabla", isComplieted: false },
    { id: v1(), name: "blablabla", isComplieted: true },
    { id: v1(), name: "blablabla", isComplieted: false },
    { id: v1(), name: "blablabla", isComplieted: true },
    { id: v1(), name: "blablabla", isComplieted: false },
    { id: v1(), name: "blablabla", isComplieted: false },
  ]);

  const [filter, setFilter] = React.useState('all')

  let filterTestArray = testArray
  if (filter === 'done') {
   filterTestArray = testArray.filter(t => t.isComplieted !== false)
  }
  if (filter === 'none') {
     filterTestArray = testArray.filter(t => t.isComplieted !== true)
  }

  const filterTask = (value: FilterType) => {
      setFilter(value)
  }

  const delTask = (id: string) => {
   setTestArray(testArray.filter(t => t.id !== id))
  }

  return (
    <TestToDo
      titlePage={"heey is' a new test"}
      task={filterTestArray}
      delTask={delTask}
      filterTask={filterTask}
    />
  );
};

export default TestttApp;

export {}