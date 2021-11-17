import * as actions from "../actions/actionTypes";

export const setActivateCell = (payload) => {
  return {
    type: actions.ACTIVATE_CELL,
    payload: payload,
  };
};

export const setSudokuState = (row, column, value) => {
  return {
    type: actions.SET_SUDOKU_STATE,
    payload: { row: row, column: column, value: value },
  };
};

export const setInvalidCells = (invalidNumbersArr) => {
  return {
    type: actions.SET_INVALID_CELLS,
    payload: {
      invalidNumbersArr: invalidNumbersArr,
    },
  };
};

export const setInvalidRows = (invalidRows) => {
  return {
    type: actions.SET_INVALID_ROWS,
    payload: {
      invalidRows: invalidRows,
    },
  };
};

export const setInvalidColumns = (invalidColumns) => {
  return {
    type: actions.SET_INVALID_COLUMNS,
    payload: {
      invalidColumns: invalidColumns,
    },
  };
};
