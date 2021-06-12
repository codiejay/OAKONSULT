import { ActionTypes } from "./types";

const INITIAL_STATE = {
  quotes: [],
};

const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
