import React from "react";
import * as classes from "./Cell.module.css";

const Cell = (props) => {
  return <div className={classes.Cell}>{props.value}</div>;
};
export default Cell;
