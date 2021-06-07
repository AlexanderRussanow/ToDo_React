import React from 'react'
import Selector from './for_test/Select'

const testItems = [
   {
     value: 1,
     title: "Moscow",
   },
   {
     value: 2,
     title: "Minsk",
   },
   {
     value: 3,
     title: "Kiev",
   },
 ];
 

const AppTestAgaine = () => {
const [value, setValue] = React.useState(undefined)

   return <Selector value={value} items={testItems} onChange={setValue}/>
}

export default AppTestAgaine