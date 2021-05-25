import React from "react";
import AdminBlogPost from "../../../components/admin/AdminBlogPost/AdminBlogPost";
import { useSelector } from "react-redux";

import "./styles.scss";

const Trash = () => {
  const trash = useSelector(({ admin }) => admin.trash);
  return (
    <div className="trash">
      <div className="trashes">
        {trash.map((item, index) => (
          <AdminBlogPost key={index} data={item} trashpage />
        ))}
        {trash.length === 0 && <span className="empty">Empty</span>}
      </div>
    </div>
  );
};

export default Trash;
