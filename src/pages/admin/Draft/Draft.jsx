import React from "react";
import DraftPreview from "../../../componentz/admin/DraftPreview/DraftPreview";
import { useSelector } from "react-redux";

import "./styles.scss";

const Draft = () => {
  const draft = useSelector(({ admin }) => admin.draft);
  return (
    <div className="draft">
      <div className="drafts">
        {draft.map((item, index) => (
          <DraftPreview key={index} data={item} />
        ))}
        {draft.length === 0 && <span className="empty">No Item</span>}
      </div>
    </div>
  );
};

export default Draft;
