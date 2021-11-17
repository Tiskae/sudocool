import React from "react";
import * as classes from "./SudokuBox.module.css";

const SudokuBox = (props) => {
  const styleClasses = [classes.SudokuBox];
  if (props.isInvalid) styleClasses.push(classes.Invalid);

  return <div className={styleClasses.join(" ")}></div>;
};
export default SudokuBox;
