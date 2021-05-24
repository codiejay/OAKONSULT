import { ActionTypes } from "./types";

const INITIAL_STATE = {
  admin: null,
  toggle_editor: false,
  current_page: "dashboard",
  trash: [],
  draft: [],
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case ActionTypes.TOGGLE_EDITOR:
      return {
        ...state,
        toggle_editor: action.payload,
      };
    case ActionTypes.CURRENT_PAGE:
      return {
        ...state,
        current_page: action.payload,
      };
    case ActionTypes.UPDATE_DRAFT:
      return {
        ...state,
        draft: action.payload,
      };
    case ActionTypes.UPDATE_TRASH:
      return {
        ...state,
        trash: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
