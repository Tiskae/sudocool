import React from "react";
import { connect } from "react-redux";
import * as classes from "./CellInputs.module.css";
import CellInput from "../../components/CellInput/CellInput";
import * as actions from "../../store/actions/actionTypes";
import * as sudokuActions from "../../store/actions/sudokuActions";

const availableInputs = ["C", 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CellInputs = (props) => {
  const cellInputClickedHandler = (value) => {
    const { row, column } = props.activeCell;
    props.setSudokuState(row, column, value);
  };

  return (
    <div className={classes.CellInputs}>
      {availableInputs.map((el, i) => (
        <CellInput
          key={i}
          value={el}
          cellInputClickedHandler={cellInputClickedHandler}
          isClear={el === "C" ? true : false}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAnyCellActive: state.appUI.isAnyCellActive,
    activeCell: state.appUI.activeCell,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSudokuState: (row, column, value) =>
      dispatch(sudokuActions.setSudokuState(row, column, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CellInputs);
