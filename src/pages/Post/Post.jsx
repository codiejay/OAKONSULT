import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import renderHTML from "react-render-html";
import { firestore } from "../../firebase/config";
import Spinner from "../../componentz/Spinner/Spinner";

import "./styles.scss";

const Post = ({ endpoint }) => {
  const location = useLocation();
  const query = location.search;
  console.log(query);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const blogsRef = firestore.doc(`blogs/${query.split("?")[1]}`);
      const snapShot = await blogsRef.get();
      console.log();
      if (snapShot.exists) {
        setData(snapShot.data());
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? <Spinner style={{ height: "70vh" }} /> : renderHTML(data.body)}
    </div>
  );
};

export default Post;
