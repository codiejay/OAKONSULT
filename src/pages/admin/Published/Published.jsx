import React from "react";
import PublishedPost from "../../../componentz/admin/PublishedPost/PublishedPost";

import "./styles.scss";

const Published = ({ blogs }) => {
  return (
    <div className="admin-blog-posts">
      {blogs.map((item, index) => (
        <PublishedPost key={index} data={item} />
      ))}
      {blogs.length === 0 && (
        <span className="empty">No Published Blog Yet</span>
      )}
    </div>
  );
};

export default Published;
