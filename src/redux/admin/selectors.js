import { createSelector } from "reselect";

const selectAdminState = (state) => state.admin;

export const selectAdmin = createSelector(
  [selectAdminState],
  (admin) => admin.admin
);
export const selectToggleEditor = createSelector(
  [selectAdminState],
  (admin) => admin.toggle_editor
);
export const selectCurrentPage = createSelector(
  [selectAdminState],
  (admin) => admin.current_page
);
export const selectDraft = createSelector(
  [selectAdminState],
  (data) => data.draft
);
export const selectTrash = createSelector(
  [selectAdminState],
  (data) => data.trash
);
