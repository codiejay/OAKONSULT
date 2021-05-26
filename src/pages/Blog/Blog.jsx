import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import BlogOverview from "../../components/BlogOverview/BlogOverview";
import Tag from "../Tag/Tag";

const Blog = () => {
  const location = useLocation().pathname;
  const endpoint = location.split("/")[location.split("/").length - 1];
  return (
    <>
      {/* BLOG OVERVIEW */}
      <Route
        exact
        path={`/blogs`}
        render={() => <Redirect to="/blogs/all" />}
      />
      <Route exact path={`/blogs/all`} render={() => <BlogOverview />} />
      <Route
        path={`/blogs/for-parents`}
        render={() => <Tag endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-siblings`}
        render={() => <Tag endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-carers`}
        render={() => <Tag endpoint={endpoint} />}
      />
    </>
  );
};

export default Blog;
