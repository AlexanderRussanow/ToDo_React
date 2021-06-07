import React from 'react'

type PropsType = {
   count: number
}

const ComponentCount = (props: PropsType) => {
   return <div>{props.count}</div>
}

export default ComponentCount