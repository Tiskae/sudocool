import React from "react";
import * as classes from "./CellInput.module.css";

const CellInput = (props) => {
  const cellInputClasses = [classes.CellInput];
  if (props.isClear) cellInputClasses.push(classes.ClearCell);

  const onClickHandler = () => {
    if (props.isClear) {
      props.cellInputClickedHandler(null);
      return;
    }
    props.cellInputClickedHandler(+props.value);
  };

  return (
    <div className={cellInputClasses.join(" ")} onClick={onClickHandler}>
      <div className={classes.Progress}></div>
      <p className={classes.Value}>{props.value}</p>
    </div>
  );
};
export default CellInput;
