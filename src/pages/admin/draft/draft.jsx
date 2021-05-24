import React from "react";
import AdminDraftPreview from "../../components/admin/admin-draft-preview/admin-draft-preview";
import { useSelector } from "react-redux";

import "./styles.scss";

const Draft = () => {
  const draft = useSelector(({ admin }) => admin.draft);
  return (
    <div className="draft">
      <div className="drafts">
        {draft.map((item, index) => (
          <AdminDraftPreview key={index} data={item} />
        ))}
        {draft.length === 0 && <span className="empty">No Item</span>}
      </div>
    </div>
  );
};

export default Draft;
