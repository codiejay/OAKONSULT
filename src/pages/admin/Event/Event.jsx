import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { Route, useHistory } from "react-router-dom";
import { firestore } from "../../../firebase/config";
import EventOverView from "../../../componentz/admin/EventOverView/EventOverView";
// import EventView from "../EventView/EventView";

import "./styles.scss";

const Event = () => {
  const [hasEvent, setHasEvent] = useState(false);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadEvent = useCallback(async () => {
    const eventRef = firestore.collection("event").orderBy("name", "asc");
    eventRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasEvent(true);
        const eventArray = [];
        snapShot.forEach((item) => {
          eventArray.push(item.data());
        });
        setEvent(eventArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadEvent();
    return () => {};
  }, [onLoadEvent]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/events`}
        render={() => (
          <EventOverView hasEvent={hasEvent} event={event} loading={loading} />
        )}
      />
      {/* <Route
        exact
        path={`/event/:eventId`}
        render={() =>
          event ? <EventView /> : <Redirect to="/event" />
        }
      /> */}
    </>
  );
};

export default Event;
