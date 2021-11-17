import * as actions from "../actions/actionTypes";

const store = {
  sudokuState: [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ],
  invalidNumbersArr: [],
  invalidRowsArr: [],
  invalidColumnsArr: [],
  isAnyCellJustUpdated: "foo",
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case actions.ACTIVATE_CELL:
      return {
        ...state,
        isAnyCellJustUpdated:
          state.isAnyCellJustUpdated === "foo" ? "bar" : "foo",
        sudokuState: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 54, 5, 6, 7, 7],
        ],
      };
    case actions.SET_SUDOKU_STATE:
      // console.log(
      //   action.type,
      //   action.payload.row,
      //   action.payload.column,
      //   action.payload.value
      // );
      const newState = state.sudokuState.map((el, i) => {
        if (i === action.payload.row - 1) {
          const newRow = el.map((el, i) => {
            if (i === action.payload.column - 1) {
              // console.log("Yayyyy");
              return action.payload.value;
            } else return el;
          });
          // console.log(newRow);
          return newRow;
        } else return el;
      });
      // console.log(newState);

      return {
        ...state,
        sudokuState: newState,
        isAnyCellJustUpdated:
          state.isAnyCellJustUpdated === "foo" ? "bar" : "foo",
      };

    case actions.SET_INVALID_CELLS:
      const newInvalidNumbers = [...action.payload.invalidNumbersArr];
      return {
        ...state,
        invalidNumbersArr: newInvalidNumbers,
      };
    case actions.SET_INVALID_ROWS:
      return {
        ...state,
        invalidRowsArr: [...action.payload.invalidRows],
      };
    case actions.SET_INVALID_COLUMNS:
      return {
        ...state,
        invalidColumnsArr: [...action.payload.invalidColumns],
      };

    default:
      return state;
  }
};

export default reducer;
