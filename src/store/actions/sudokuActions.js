import * as actions from "../actions/actionTypes";

export const setActivateCell = (payload) => {
  return {
    type: actions.ACTIVATE_CELL,
    payload: payload,
  };
};
