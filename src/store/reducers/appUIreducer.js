import * as actions from "../actions/actionTypes";

const store = {
  isAnyCellActive: false,
  activeCell: {
    row: null,
    column: null,
  },
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_CELL_STATE:
      //   console.log(action.type, action.payload.row, action.payload.column);
      return {
        ...state,
        activeCell: { row: action.payload.row, column: action.payload.column },
      };
    default:
      return state;
  }
};

export default reducer;
