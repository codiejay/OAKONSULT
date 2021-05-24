import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin, setCurrentPage } from "../../../redux/admin/actions";
import { Link } from "react-router-dom";
// import logo from "../../../assets/logo.svg";
import menu from "../../../assets/icons/menu.svg";
import dash from "../../../assets/admin/dashboard.svg";
import draft from "../../../assets/admin/draft.svg";
import publish from "../../../assets/admin/publish.svg";
import affiliate from "../../../assets/admin/affiliate.svg";
import trashIcon from "../../../assets/admin/trashIcon.svg";
import logout from "../../../assets/admin/logout.svg";
import { auth } from "../../../firebase/config";
import "./admin-sidepanel.scss";

const AdminSidepanel = ({ toggleSidePanel, isSidePanelShowing }) => {
  const currentPage = useSelector(({ admin }) => admin.currentPage);
  const dispatch = useDispatch();
  return (
    <>
      <div className="logo_menu">
        <Link
          to="/wra-admin"
          style={!isSidePanelShowing ? { opacity: 0, display: "none" } : {}}
        >
          {/* <img src={logo} alt="Logo" /> */}
        </Link>
        <div
          className="menu"
          onClick={toggleSidePanel}
          style={!isSidePanelShowing ? { paddingLeft: "20px" } : {}}
        >
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="admin-sidenav-links">
        <div
          className="link-btn"
          style={
            currentPage === "dashboard"
              ? { borderLeft: "3px solid #77323b" }
              : {}
          }
          onClick={() => dispatch(setCurrentPage("dashboard"))}
        >
          <img src={dash} alt="dash" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            DASHBOARD
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "affiliate"
              ? { borderLeft: "3px solid #77323b" }
              : {}
          }
          onClick={() => dispatch(setCurrentPage("affiliate"))}
        >
          <img src={affiliate} alt="affiliate" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            AFFILIATE
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "draft" ? { borderLeft: "3px solid #77323b" } : {}
          }
          onClick={() => dispatch(setCurrentPage("draft"))}
        >
          <img src={draft} alt="dash" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>DRAFT</span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "published"
              ? { borderLeft: "3px solid #77323b" }
              : {}
          }
          onClick={() => dispatch(setCurrentPage("published"))}
        >
          <img src={publish} alt="publish" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            PUBLISHED
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "trash" ? { borderLeft: "3px solid #77323b" } : {}
          }
          onClick={() => dispatch(setCurrentPage("trash"))}
        >
          <img src={trashIcon} alt="trash" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>TRASH</span>
        </div>
      </div>
      <div
        className="logout"
        onClick={() => {
          auth.signOut();
          dispatch(setAdmin(null));
        }}
      >
        <img src={logout} alt="dash" />
        <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>LOGOUT</span>
      </div>
    </>
  );
};

export default AdminSidepanel;
