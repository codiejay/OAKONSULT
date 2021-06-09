import React, { useCallback, useEffect, useState } from "react";
import { Entypo } from "react-web-vector-icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import AddEvent from "../AddEvent/AddEvent";
import Spinner from "../../Spinner/Spinner";
// import { setEvents } from "../../../redux/dashboard/actions";

import "./styles.scss";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase/config";
import { colors } from "../../../constants/Colors";

const EventOverView = () => {
  const [hasEvent, setHasEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("upcoming");
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const eventRef = firestore.collection("events");
  const onLoadEvents = useCallback(async () => {
    const query =
      type === "upcoming"
        ? eventRef.where("timestring", ">", Date.now())
        : eventRef.where("timestring", "<", Date.now());
    query.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasEvent(true);
        const eventArray = [];
        snapShot.forEach((item) => {
          eventArray.push(item.data());
        });
        setEvents(eventArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, [eventRef, type]);
  useEffect(() => {
    onLoadEvents();
    return () => {};
  }, [onLoadEvents]);
  return loading ? (
    <Spinner style={{ height: "30vh" }} />
  ) : (
    <>
      <EventNav setType={setType} setDialogVisible={setDialogVisible} />
      {!hasEvent ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">You have'nt added any event yet</span>
          <Spacing height="2em" />
          <CustomButton
            label="Add Event"
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
            label="Add Event"
            className="add-photo-btn absolute-btn"
            onClick={() => {
              setType("addEvent");
              setDialogVisible(true);
            }}
          />
          <Spacing height="2em" />
          <div className="flex-vertical-center photo-list">
            {events.map((item, index) => (
              <div
                key={index}
                className="flex-center-column photo-preview"
                onClick={() => {
                  history.push(`/event/${item.eventId}`);
                }}
              >
                <Spacing height="1em" />
                <div className="flex-center photo-icon">
                  {/* <Entypo name="shop" size={30} color="black" /> */}
                </div>
                <Spacing height="1em" />
                <h3>{item.name}</h3>
                <h3>{item.description}</h3>
                <h3>{item.date}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        {type === "addEvent" && (
          <AddEvent
            type={type}
            setType={setType}
            setDialogVisible={setDialogVisible}
          />
        )}
      </Dialog>
    </>
  );
};

export default EventOverView;

const EventNav = ({ type, setType, setDialogVisible }) => {
  return (
    <div className="event-nav">
      <ul className="event-nav-links">
        <li className="event-nav-link" onClick={() => setType("upcoming")}>
          <Link style={type === "upcoming" ? { color: colors.tint } : {}}>
            Upcoming Events
          </Link>
        </li>
        <li className="event-nav-link" onClick={() => setType("past")}>
          <Link style={type === "past" ? { color: colors.tint } : {}}>
            Past Events
          </Link>
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
