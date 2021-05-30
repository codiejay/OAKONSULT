import React, { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import TagOverview from "../../componentz/TagOverview/TagOverview";
import { firestore } from "../../firebase/config";

import "./styles.scss";

const Post = ({ endpoint }) => {
  console.log(endpoint);
  return (
    <div>
      <h1>Post Page</h1>
    </div>
  );
};

export default Post;
