import React from "react";
import IconList from "./IconList";

import "./StartDesktop.css";
import WindowComponent from "./window/WindowComponent";

const StartDesktop = () => {
  return (
    <>
      <div className="desktop">
        <IconList />
        <WindowComponent id="myComputer" title="Mi PC" content="Mi PC" />
        <WindowComponent id="recycleBin" title="Papelera" content="Papelera" />
      </div>
    </>
  );
};

export default StartDesktop;
