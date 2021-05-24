import React from "react";
import { Helmet } from "react-helmet";

import "./styles.scss";

const PublicSpeaking = () => {
  return (
    <>
      <Helmet>
        <title>Public Speaking &mdash; Oak</title>
        <meta property="og:title" content="Public Speaking &mdash; Oak" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Oakonsult" />
      </Helmet>
      <div>
        <h1>Public Speaking</h1>
      </div>
    </>
  );
};

export default PublicSpeaking;
