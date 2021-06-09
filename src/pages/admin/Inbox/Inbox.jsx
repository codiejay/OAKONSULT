import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { Route, useHistory } from "react-router-dom";
import Spacing from "../../../componentz/Spacing/Spacing";
// import InboxPreview from "../../../componentz/admin/InboxPreview/InboxPreview";
import { firestore } from "../../../firebase/config";

import "./styles.scss";

const Inbox = () => {
  const [hasInbox, setHasInbox] = useState(false);
  const [inbox, setInbox] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadInbox = useCallback(async () => {
    const inboxRef = firestore.collection("inbox").orderBy("timestamp", "asc");
    inboxRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasInbox(true);
        const inboxArray = [];
        snapShot.forEach((item) => {
          inboxArray.push(item.data());
        });
        setInbox(inboxArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadInbox();
    return () => {};
  }, [onLoadInbox]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      {!hasInbox ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">Empty</span>
          <Spacing height="2em" />
        </div>
      ) : (
        <div className="message-list">
          {inbox.map((item) => {
            return (
              <div className="message-preview">
                <h3 className="message-title">{item.title}</h3>
                <span className="timestamp">{item.time}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Inbox;
