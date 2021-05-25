import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../../firebase/config";
import edit from "../../../assets/admin/edit.svg";
import recycle from "../../../assets/admin/recycle.svg";
import trashIcon from "../../../assets/admin/trashIcon.svg";
import AdminEditBlogPost from "../AdminEditBlogPost/AdminEditBlogPost";
import { updateTrash } from "../../../redux/admin/actions";

import "./styles.scss";

const AdminBlogPost = ({ data, trashpage }) => {
  const trash = useSelector(({ admin }) => admin.trash);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [isShow, setShow] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });

  const deleteBlog = async () => {
    await firestore.collection("blogs").doc(data.id).delete();
    dispatch(updateTrash([...trash, data]));
    setShow(false);
  };
  const restoreBlog = async () => {
    try {
      await firestore.collection("blogs").doc(data.id).set(data);
      setMessage({ success: "Blog Restored" });
      const newTrash = trash.filter((item, index) => item.id !== data.id);
      dispatch(updateTrash([...newTrash]));
    } catch (error) {
      setMessage({ error: "Failed, try again" });
    }
  };
  const updateSliderItem = async (check) => {
    await firestore
      .collection("blogs")
      .doc(data.id)
      .update({ slider_item: check });
  };
  return (
    <>
      {message.error !== "" && (
        <span className="noty error">{message.error}</span>
      )}
      {message.success !== "" && (
        <span className="noty success">{message.success}</span>
      )}
      <div className="admin-blog-post">
        <div className="tumbnail">
          <img src={data.tumbnail ? data.tumbnail : ""} alt="tumbnail" />
        </div>
        <div className="text">
          <h2 className="title">{data.title ? data.title : "Blog Title"}</h2>
          <p className="truncate-text">
            {data.hook
              ? data.hook.split(" ").slice(0, 30).join(" ")
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          laudantium totam earum dolore deleniti necessitatibus. Repudiandae
          ipsum ipsa minima? Cupiditate incidunt.`}
          </p>
          <div className="carosel-post">
            <span>Make it appear in slider</span>
            <div
              className="slider-item-check"
              onClick={() =>
                data.slider_item
                  ? updateSliderItem(false)
                  : updateSliderItem(true)
              }
              style={data.slider_item ? { backgroundColor: "#6ab5b9" } : {}}
            ></div>
          </div>
        </div>
        <div className="controls">
          {!trashpage && (
            <div className="ctrl edit" onClick={() => setEditing(!editing)}>
              <img src={edit} alt="edit" />
            </div>
          )}
          {!trashpage && (
            <div className="ctrl trash" onClick={() => setShow(!isShow)}>
              <img src={trashIcon} alt="trash" />
            </div>
          )}
          {trashpage && (
            <div className="ctrl recycle" onClick={restoreBlog}>
              <img src={recycle} alt="recycle" />
            </div>
          )}
          {trashpage && (
            <div className="ctrl trash" onClick={() => setShow(!isShow)}>
              <img src={trashIcon} alt="trash" />
            </div>
          )}
        </div>
        {isShow && (
          <div className="warning-container">
            <div className="warning">
              <span>
                Are you sure you want to{trashpage && ` permanently`} delete
                this blog?
              </span>
              <div className="warning-btns">
                <button className="warning-btn" onClick={deleteBlog}>
                  Yes
                </button>
                <button
                  className="warning-btn"
                  onClick={() => setShow(!isShow)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        {editing && (
          <AdminEditBlogPost data={{ ...data }} setEditing={setEditing} />
        )}
      </div>
    </>
  );
};

export default AdminBlogPost;
