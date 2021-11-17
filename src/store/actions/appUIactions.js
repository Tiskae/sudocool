import * as actions from "./actionTypes";

export const setACtiveCellState = (row, column) => {
  return {
    type: actions.SET_ACTIVE_CELL_STATE,
    payload: { row: row, column: column },
  };
};
