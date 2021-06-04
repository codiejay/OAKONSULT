import React, { useState } from "react";
import { Entypo } from "react-web-vector-icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import AddEvent from "../AddEvent/AddEvent";
import Spinner from "../../Spinner/Spinner";
// import { setEvent } from "../../../redux/dashboard/actions";

import "./styles.scss";
import { Link } from "react-router-dom";

const EventOverView = ({ hasEvent, event, loading }) => {
  const [type, setType] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return loading ? (
    <Spinner style={{ height: "30vh" }} />
  ) : (
    <>
      <EventNav setType={setType} setDialogVisible={setDialogVisible} />
      {!hasEvent ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">You have'nt added any photo yet</span>
          <Spacing height="2em" />
          <CustomButton
            label="Add Photo"
            className="add-photo-btn"
            onClick={() => {
              setType("addEvent");
              setDialogVisible(true);
            }}
          />
        </div>
      ) : (
        <div className="has-data">
          <CustomButton
            label="Add Photo"
            className="add-photo-btn absolute-btn"
            onClick={() => {
              setType("addEvent");
              setDialogVisible(true);
            }}
          />
          <Spacing height="2em" />
          <div className="flex-vertical-center photo-list">
            {event.map((item, index) => (
              <div
                key={index}
                className="flex-center-column photo-preview"
                onClick={() => {
                  // dispatch(setEvent(item));
                  history.push(`/event/${item.photoCode}`);
                }}
              >
                <Spacing height="1em" />
                <div className="flex-center photo-icon">
                  <Entypo name="shop" size={30} color="black" />
                </div>
                <Spacing height="1em" />
                <h3>{item.photoCode}</h3>
                <h3>{item.name}</h3>
                <h3>{item.address}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        {type === "addEvent" && (
          <AddEvent setDialogVisible={setDialogVisible} />
        )}
        {/* {type === "photoView" && (
          <EventView
            setDialogVisible={setDialogVisible}
            setEventtData={setEventtData}
            data={photoData}
          />
        )} */}
      </Dialog>
    </>
  );
};

export default EventOverView;

const EventNav = ({ setType, setDialogVisible }) => {
  return (
    <div className="event-nav">
      <ul className="event-nav-links">
        <li className="event-nav-link">
          {" "}
          <Link to="oak-admin/events/active">Active</Link>{" "}
        </li>
        <li className="event-nav-link">
          <Link to="oak-admin/events/upcoming">Uncoming</Link>
        </li>
        <li className="event-nav-link">
          <Link to="oak-admin/events/past">Previous</Link>
        </li>
      </ul>
      <CustomButton
        label="Add Event"
        className="add-event-btn absolute-btn"
        onClick={() => {
          setType("addEvent");
          setDialogVisible(true);
        }}
      />
    </div>
  );
};
