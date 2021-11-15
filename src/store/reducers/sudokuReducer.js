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
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case actions.ACTIVATE_CELL:
      return "REDUX SUCCESSFULLY CONFIGURED!";
    default:
      return state;
  }
};

export default reducer;
