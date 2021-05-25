import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../../assets/admin/edit.svg";
import trashIcon from "../../../assets/admin/trashIcon.svg";
import AdminEditBlogPost from "../AdminEditBlogPost/AdminEditBlogPost";
import { updateDraft } from "../../../redux/admin/actions";

import "./styles.scss";

const AdminDraftPreview = ({ data }) => {
  const draft = useSelector(({ admin }) => admin.draft);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const deleteDraft = () => {
    const newDraft = draft.filter((item, index) => item.id !== data.id);
    dispatch(updateDraft([...newDraft]));
  };
  return (
    <>
      <div className="admin-draft-preview">
        <div className="tumbnail">
          <img src={data.tumbnail ? data.tumbnail : ""} alt="tumbnail" />
        </div>
        <div className="text">
          <h2 className="title">{data.title ? data.title : "Blog Title"}</h2>
          <p className="truncate-text">
            {data.hook
              ? data.hook
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          laudantium totam earum dolore deleniti necessitatibus. Repudiandae
          ipsum ipsa minima? Cupiditate incidunt.`}
          </p>
        </div>
        <div className="controls">
          {" "}
          <div className="control edit" onClick={() => setEditing(!editing)}>
            <img src={edit} alt="edit" />
          </div>
          <div className="control trash" onClick={deleteDraft}>
            <img src={trashIcon} alt="trash" />
          </div>
        </div>
        {editing && (
          <AdminEditBlogPost data={{ ...data }} setEditing={setEditing} />
        )}
      </div>
    </>
  );
};

export default AdminDraftPreview;
