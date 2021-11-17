import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as classes from "./Sudoku.module.css";
import Cell from "../../components/Cell/Cell";
import * as sudokuActions from "../../store/actions/sudokuActions";
import * as appUIactions from "../../store/actions/appUIactions";
import SudokuBoxes from "./SudokuBoxes/SudokuBoxes";

const Sudoku = (props) => {
  useEffect(() => {
    checkForRepeatedNumbersInRowsAndColumns();
  }, [props.isAnyCellJustUpdated]);

  const generateRepeatedNumbersInRows = (state) => {
    let repeatedNumbersArr = [];
    let repeatedNumbersRows = [];
    state.forEach((row, index) => {
      const allNumberCounter = [
        { val: 1, count: 0 },
        { val: 2, count: 0 },
        { val: 3, count: 0 },
        { val: 4, count: 0 },
        { val: 5, count: 0 },
        { val: 6, count: 0 },
        { val: 7, count: 0 },
        { val: 8, count: 0 },
        { val: 9, count: 0 },
      ];

      row.forEach((cell, i) => {
        // Guard class
        if (cell === null) return;
        const currentIndex = allNumberCounter.findIndex(
          (el) => el.val === cell
        );

        if (currentIndex !== -1) {
          const newCounterEl = {
            val: cell,
            count: allNumberCounter[currentIndex].count + 1,
          };
          allNumberCounter[currentIndex] = newCounterEl;
        }
      });
      const repeatNums = [];

      const repeatedNumbersObj = allNumberCounter.filter((el) => el.count > 1);
      for (const num in repeatedNumbersObj) {
        const repeatedNum = repeatedNumbersObj[num].val;

        repeatNums.push(repeatedNum);
        repeatedNumbersRows.push(index + 1);
      }

      repeatedNumbersArr = repeatedNumbersArr.concat(repeatNums);
    });

    // console.log(repeatedNumbersRows);
    props.setInvalidRows(repeatedNumbersRows);
    return repeatedNumbersArr;
  };

  const generateRepeatedNumbersInColumns = (state) => {
    let repeatedNumbersArr = [];
    let repeatedNumbersColumns = [];
    const transformedState = state.map((outer_el, outer_i, mainArr) => {
      const columnFromRow = [];
      outer_el.forEach((_, inner_i) => {
        const newEl = mainArr[inner_i][outer_i];
        columnFromRow.push(newEl);
      });
      return columnFromRow;
      // console.log(columnFromRow);
    });
    // console.log(transformedState);

    transformedState.forEach((row, index) => {
      const allNumberCounter = [
        { val: 1, count: 0 },
        { val: 2, count: 0 },
        { val: 3, count: 0 },
        { val: 4, count: 0 },
        { val: 5, count: 0 },
        { val: 6, count: 0 },
        { val: 7, count: 0 },
        { val: 8, count: 0 },
        { val: 9, count: 0 },
      ];

      row.forEach((cell, i) => {
        // Guard class
        if (cell === null) return;
        const currentIndex = allNumberCounter.findIndex(
          (el) => el.val === cell
        );

        if (currentIndex !== -1) {
          const newCounterEl = {
            val: cell,
            count: allNumberCounter[currentIndex].count + 1,
          };
          allNumberCounter[currentIndex] = newCounterEl;
        }
      });
      const repeatNums = [];

      const repeatedNumbersObj = allNumberCounter.filter((el) => el.count > 1);
      for (const num in repeatedNumbersObj) {
        const repeatedNum = repeatedNumbersObj[num].val;
        repeatedNumbersColumns.push(index + 1);
        repeatNums.push(repeatedNum);
      }

      repeatedNumbersArr = repeatedNumbersArr.concat(repeatNums);
    });
    // console.log(repeatedNumbersArr);
    // console.log(repeatedNumbersColumns);
    props.setInvalidColumns(repeatedNumbersColumns);
    return repeatedNumbersArr;
  };

  const checkForRepeatedNumbersInRowsAndColumns = () => {
    const repeatedNumbersInRows = generateRepeatedNumbersInRows(
      props.sudokuState
    );
    const repeatedNumbersInColumns = generateRepeatedNumbersInColumns(
      props.sudokuState
    );
    const repeatedNumbers = [
      ...new Set([...repeatedNumbersInRows, ...repeatedNumbersInColumns]),
    ];
    // console.log(repeatedNumbers);
    props.setInvalidNumbers(repeatedNumbers);
  };

  const cellFocusHandler = (row, column) => {
    props.setActivateCellState(row, column);
  };

  return (
    <div className={classes.Sudoku}>
      {/* For styling grid frames only, no logic */}
      <SudokuBoxes />

      {/* Actual logic */}
      <div className={classes.Content}>
        {/* {new Array(79).fill("0").map((el, idx) => (
          <Cell key={idx} value={idx} />
        ))}
        <Cell value="" isInvali />
        <Cell value="80" isDefault /> */}

        {props.sudokuState.flat().map((el, i) => {
          const row = Math.floor(i / 9) + 1;
          const column = (i + 1) % 9 === 0 ? 9 : (i + 1) % 9;
          return (
            <Cell
              key={i}
              value={el}
              cellFocusHandler={cellFocusHandler}
              row={row}
              column={column}
              isInvalid={
                props.invalidNumbersArr.includes(el) &&
                (props.invalidRows.includes(row) ||
                  props.invalidColumns.includes(column))
              }
            />
          );
        })}
      </div>

      {/* <button onClick={props.setActivateCell}>Test setup!</button> */}
      {/* <button
        onClick={() => console.log(props.invalidRows, props.invalidColumns)}
      >
        Set inval
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sudokuState: state.sudoku.sudokuState,
    activeCell: state.appUI.activeCell,
    invalidNumbersArr: state.sudoku.invalidNumbersArr,
    isAnyCellJustUpdated: state.sudoku.isAnyCellJustUpdated,
    invalidRows: state.sudoku.invalidRowsArr,
    invalidColumns: state.sudoku.invalidColumnsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActivateCellState: (row, column) =>
      dispatch(appUIactions.setACtiveCellState(row, column)),
    setInvalidNumbers: (invalidNumbersArr) =>
      dispatch(sudokuActions.setInvalidCells(invalidNumbersArr)),
    setInvalidRows: (invalidRows) =>
      dispatch(sudokuActions.setInvalidRows(invalidRows)),
    setInvalidColumns: (invalidColumns) =>
      dispatch(sudokuActions.setInvalidColumns(invalidColumns)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
