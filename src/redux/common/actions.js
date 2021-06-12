import { ActionTypes } from "./types";

export const setQoutes = (quotes) => ({
  type: ActionTypes.SET_QUOTES,
  payload: quotes,
});
