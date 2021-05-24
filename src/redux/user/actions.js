import { ActionTypes } from "./types";

export const setAdmin = (admin) => ({
  type: ActionTypes.SET_ADMIN,
  payload: admin,
});
