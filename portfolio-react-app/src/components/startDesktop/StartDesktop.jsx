import React from "react";
import IconList from "./IconList";
import TaskBar from "./taskbar/TaskBar";
import "./StartDesktop.css";
import WindowComponent from "./window/WindowComponent";

const StartDesktop = () => {
  return (
    <>
      <div className="desktop">
        <IconList />
        <WindowComponent id="myComputer" title="Mi PC" content="Mi PC" />
        <WindowComponent id="recycleBin" title="Papelera" content="Papelera" />
        <TaskBar />
      </div>
    </>
  );
};

export default StartDesktop;
