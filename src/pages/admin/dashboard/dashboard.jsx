import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../../../firebase/config";
import plus from "../../../assets/admin/plus.svg";
// import logo from "../../assets/weRlogo.svg";
import draftIcon from "../../../assets/admin/draft.svg";
import publish from "../../../assets/admin/publish.svg";
import trashIcon from "../../../assets/admin/trashIcon.svg";
import NewPostModal from "../../../components/admin/new-post-modal/new-post-modal";
import AdminSidepanel from "../../../components/admin/admin-sidepanel/admin-sidepanel";
import AdminBlogPosts from "../../../components/admin/admin-blog-posts/admin-blog-posts";
import Draft from "../draft/draft";
import Trash from "../trash/trash";

import "./styles.scss";

const Dashboard = () => {
  const currentPage = useSelector(({ admin }) => admin.currentPage);
  const draft = useSelector(({ admin }) => admin.draft);
  const trash = useSelector(({ admin }) => admin.trash);
  const [isEditorShowing, setEditorToShow] = useState(false);
  const [isSidePanelShowing, setSidePanelToShow] = useState(true);
  const [state, setState] = useState({ blogs: [] });
  useEffect(() => {
    const fetchData = async () => {
      const blogsRef = await firestore
        .collection("blogs")
        .orderBy("updated_at", "desc")
        .limit(9);
      blogsRef.onSnapshot((snapshot) => {
        const blogs = [];
        snapshot.docs.forEach((doc) => {
          blogs.push(doc.data());
        });
        setState({ blogs });
      });
    };
    fetchData();
  }, []);
  const toggleEditorShow = () => {
    setEditorToShow(!isEditorShowing);
  };
  const toggleSidePanel = () => {
    setSidePanelToShow(!isSidePanelShowing);
  };
  return (
    <div className="admin-dashboard">
      <div
        className={`sidepanel ${
          !isSidePanelShowing ? "contract-sidepanel" : ""
        }`}
      >
        <AdminSidepanel
          toggleSidePanel={toggleSidePanel}
          isSidePanelShowing={isSidePanelShowing}
        />
      </div>
      <div className={`admin-main ${!isSidePanelShowing ? "expand-main" : ""}`}>
        <div className="admin-navbar">
          <div className="route">
            <span>{currentPage.toUpperCase()}</span>
          </div>
          <div className="user">
            <div className="avatar-container">
              {" "}
              {/* <img src={logo} alt="logo" /> */}
            </div>
            <span>ADMIN</span>
          </div>
        </div>
        {currentPage === "dashboard" && (
          <div className="admin-buttons">
            <button className="admin-btn new-post" onClick={toggleEditorShow}>
              {" "}
              <img src={plus} alt="plus" /> NEW POST
            </button>
            <div className="admin-info-buttons">
              <button className="admin-btn published">
                {" "}
                <img src={publish} alt="publish" /> PUBLISHED{" "}
                <span>{state.blogs.length}</span>
              </button>
              <button className="admin-btn drafts">
                {" "}
                <img src={draftIcon} alt="draft" /> DRAFTS{" "}
                <span>{draft.length}</span>
              </button>
              <button className="admin-btn trash">
                {" "}
                <img src={trashIcon} alt="trash" /> TRASH{" "}
                <span>{trash.length}</span>
              </button>
            </div>
          </div>
        )}
        {currentPage === "published" && <AdminBlogPosts blogs={state.blogs} />}
        {currentPage === "draft" && <Draft />}
        {currentPage === "trash" && <Trash />}
      </div>
      {isEditorShowing && <NewPostModal toggleEditorShow={toggleEditorShow} />}
    </div>
  );
};
export default Dashboard;
