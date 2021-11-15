import React from "react";
import { connect } from "react-redux";
import * as classes from "./Sudoku.module.css";
import Cell from "../../components/Cell/Cell";
import * as sudokuActions from "../../store/actions/sudokuActions";

const Sudoku = (props) => {
  return (
    <div className={classes.Sudoku}>
      {/* For styling grid frames only, no logic */}
      <div className={classes.GridFrame}>
        {new Array(9).fill("0").map((el, idx) => (
          <div className={classes.GridBox} key={idx}></div>
        ))}
      </div>

      {/* Actual logic */}
      <div className={classes.Content}>
        {new Array(81).fill("0").map((el, idx) => (
          <Cell key={idx} value={idx} />
        ))}
      </div>
      {/* <button onClick={props.setActivateCell}>Test setup!</button>
      <button onClick={() => console.log(props.sudokuState)}>
        Test setup!
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sudokuState: state.sudoku,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActivateCell: () => dispatch(sudokuActions.setActivateCell("Yay!!!")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
