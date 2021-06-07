import React from "react";
import ComponentCount from "./CountComponent";
import "./../App.css";
import ComponentButtons from "./ComponentButtons";

const AppComponent = () => {
  return (
    <div className="App">
      <div>
        {/* <ComponentCount /> */}
      </div>
      <ComponentButtons />
    </div>
  );
};

export default AppComponent;
