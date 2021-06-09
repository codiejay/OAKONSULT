import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import "suneditor/dist/css/suneditor.min.css";
import loader from "../../../assetz/loader.gif";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";
import CustomInput from "../../../componentz/CustomInput/CustomInput";
import Spacing from "../../../componentz/Spacing/Spacing";
import { firestore } from "../../../firebase/config";
import { OnPost } from "../../../firebase/firestore";
import CustomButton from "../../../componentz/CustomButton/CustomButton";

const CreatePost = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [title, setTitle] = useState("");
  const [tumbnail, setTumbnail] = useState("");
  const [hook, setHook] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["all"]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (content) => {
    setBody(content);
  };
  const OnCreatePost = async () => {
    const id = uuidv4().split("-").join("");
    if (body === "" || title === "" || tumbnail === "" || hook === "") {
      setErrorMessage("All fields is required");
      return;
    }
    setLoading(true);
    const newTopic = {
      id,
      body,
      title,
      hook,
      tumbnail,
      user: "Admin",
      tags,
      posted_at: Date.now(),
      updated_at: Date.now(),
      views: 0,
      viewers: {},
      likes: 0,
      likers: {},
      comments: 0,
    };
    console.log(newTopic);
    try {
      await OnPost(newTopic);
      setLoading(false);
      setSuccessMessage();
      this.props.toggleEditorShow();
    } catch (error) {
      setErrorMessage("Failed, try again");
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      console.log("goback");
    });
  });
  return (
    <>
      {errorMessage !== "" && (
        <span className="noty error">{errorMessage}</span>
      )}
      {successMessage !== "" && (
        <span className="noty success">{successMessage}</span>
      )}
      <CustomButton
        label="Post"
        className="create-post-btn absolute-btn"
        onClick={OnCreatePost}
        style={{ cursor: !ready ? "not-allowed" : "pointer" }}
      />
      <div className="create-post">
        <div className="properties">
          <CustomInput
            label="Title"
            value={title}
            type={"text"}
            onChange={({ target }) => setTitle(target.value)}
            required
          />
          <CustomInput
            label="Hook"
            value={hook}
            type={"text"}
            onChange={({ target }) => setHook(target.value)}
            required
          />
          <CustomInput
            label="Tumbnail"
            value={tumbnail}
            type={"text"}
            onChange={({ target }) => setTumbnail(target.value)}
            required
          />
        </div>
        <div className="editor">
          <code>
            {'<img src="https://" alt="image description" height="700px"/>'}
          </code>
          <Spacing height="1em" />
          <SunEditor
            onChange={handleChange}
            enableToolbar={true}
            showToolbar={true}
            image={image}
            placeholder="Enter content"
            show={true}
            enable={true}
            setOptions={{
              height: 500,
              plugins: plugins,
              buttonList: [
                ["bold", "italic"],
                ["list"],
                ["link"],
                ["blockquote"],
                ["codeView"],
                ["image"],
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
