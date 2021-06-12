import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import "suneditor/dist/css/suneditor.min.css";
import loader from "../../../assetz/loader.gif";

import "./styles.scss";
import CustomInput from "../../../componentz/CustomInput/CustomInput";
import Spacing from "../../../componentz/Spacing/Spacing";
import { OnPostEdit } from "../../../firebase/firestore";
import CustomButton from "../../../componentz/CustomButton/CustomButton";
import { GetWindowDimensions } from "../../../utils/functions";

const EditPost = (data) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(data.thumbnail);
  const [hook, setHook] = useState(data.hook);
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(data.tags);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (content) => {
    setBody(content);
  };
  const OnEditPost = async () => {
    if (body === "" || title === "" || thumbnail === "" || hook === "") {
      setErrorMessage("All fields is required");
      return;
    }
    setLoading(true);
    const newTopic = {
      id: data.id,
      body,
      title,
      hook,
      thumbnail,
      user: "Admin",
      tags,
      posted_at: data.posted_at,
      updated_at: Date.now(),
      views: data.views,
      viewers: data.viewers,
      likes: data.likes,
      likers: data.likers,
      comments: data.comments,
    };
    try {
      await OnPostEdit(newTopic);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed, try again");
    }
  };
  const OnMouse = () => {
    if (
      body.trim() === "" ||
      title.trim() === "" ||
      thumbnail.trim() === "" ||
      hook.trim() === ""
    ) {
      setReady(false);
    } else {
      setReady(true);
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
        onClick={OnEditPost}
        onMouseEnter={OnMouse}
        onMouseLeave={OnMouse}
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
            label="Thumbnail"
            value={thumbnail}
            type={"text"}
            onChange={({ target }) => setThumbnail(target.value)}
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
            height={`${GetWindowDimensions().height - 280}px`}
            setOptions={{
              plugins: plugins,
              buttonList: [
                ["undo", "redo", "fontSize"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                [
                  "fontColor",
                  "hiliteColor",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "table",
                ],
                [
                  "link",
                  "image",
                  "video",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "print",
                  "save",
                ],
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EditPost;
