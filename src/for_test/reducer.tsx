export {}
// import React from "react";
// const FIRST = "FIRST";

// type ActionType = {
//   type: string;
// };

// type StateType = {
//   togle: boolean;
// };
// type PropsType = {};

// const Reducer = (state: StateType, action: ActionType) => {
//   if (action.type === "FIRST") {
//     return state;
//   } else return state;
// };

// const ReducerWithSwitch = (state: StateType, action: ActionType) => {
//   switch (action.type) {
//     case "FIRST":
//       return !state;
//     default:
//       throw new Error("fucking shit!");
//   }
//   return state;
// };

// const Accordeon = (props: PropsType) => {
//   const [znacenie, reducer] = React.useReducer(ReducerWithSwitch);

//   const [visible, setVisible] = React.useState(false);

//   return (
//     <div>
//       <div>
//         <span>{props.zagolovok}</span>
//         <button>touch for collaps</button>
//       </div>
//       <ul>
//         {znacenie &&
//           props.items.map((i) => {
//             return <div>{i.nazev}</div>;
//           })}
//       </ul>
//     </div>
//   );
// };
