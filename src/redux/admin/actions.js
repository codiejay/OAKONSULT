import { ActionTypes } from "./types";

export const toggleEditor = (data) => ({
  type: ActionTypes.TOGGLE_EDITOR,
  payload: data,
});
export const setCurrentPage = (data) => ({
  type: ActionTypes.CURRENT_PAGE,
  payload: data,
});
export const updateDraft = (data) => ({
  type: ActionTypes.UPDATE_DRAFT,
  payload: data,
});
export const updateTrash = (data) => ({
  type: ActionTypes.UPDATE_TRASH,
  payload: data,
});
export const setAdmin = (admin) => ({
  type: ActionTypes.SET_ADMIN,
  payload: admin,
});
