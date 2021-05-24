import React from "react";
import { connect } from "react-redux";
import { firestore } from "../../../firebase/config";
import { createStructuredSelector } from "reselect";
import { selectAdmin, selectDraft } from "../../../redux/admin/selectors";
import { updateDraft } from "../../../redux/admin/actions";
// import { toggleEditor } from "../../redux/admin/actions";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import { GenerateId } from "../../../utils/id-generator";
import loader from "../../../assets/loader.gif";
import "suneditor/dist/css/suneditor.min.css";
import FormSelect from "../../form-select/form-select";

import "./new-post-modal.scss";

class NewPostModal extends React.Component {
  state = {
    title: "",
    tumbnail: "",
    tag: "",
    hook: "",
    body: "",
    today: "",
    isLoading: false,
    errorMessage: "",
    successMessage: "",
  };
  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };
  handleChange = (content) => {
    this.setState({ body: content });
  };
  handleCancel = () => {
    const { body, title, tag, tumbnail, hook } = this.state;
    const id = GenerateId();
    if (
      body !== "" ||
      title !== "" ||
      tag !== "" ||
      tumbnail !== "" ||
      hook !== ""
    ) {
      this.setState({ isLoading: !this.state.isLoading });
      const newDraft = {
        id,
        body,
        title,
        hook,
        tumbnail,
        user: "Admin",
        tag: tag.split(" ").join("-"),
        posted_at: Date.now(),
        updated_at: Date.now(),
        views: 0,
        viewers: [],
        comments: 0,
      };
      this.props.updateDraft([...this.props.draft, newDraft]);
      this.props.toggleEditorShow();
    }
    this.props.toggleEditorShow();
  };

  handlePostTopic = async () => {
    const { body, title, tag, tumbnail, hook } = this.state;
    const id = GenerateId();
    if (
      body === "" ||
      title === "" ||
      tag === "" ||
      tumbnail === "" ||
      hook === ""
    ) {
      this.setState({ errorMessage: "All fields is required" });
      return;
    }
    this.setState({ isLoading: !this.state.isLoading });
    const newTopic = {
      id,
      body,
      title,
      hook,
      tumbnail,
      user: "Admin",
      tag: tag.split(" ").join("-"),
      posted_at: Date.now(),
      updated_at: Date.now(),
      views: 0,
      viewers: [],
      comments: 0,
    };
    try {
      await firestore.collection("blogs").doc(id).set(newTopic);
      this.setState({
        isLoading: !this.state.isLoading,
        successMessage: "Blog successfully posted",
      });
      this.props.toggleEditorShow();
    } catch (error) {
      this.setState({ errorMessage: "Failed, try again" });
    }
  };
  componentDidMount() {
    const now = new Date();

    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + now.getMonth()).slice(-2);

    const today = now.getFullYear() + "-" + month + "-" + day;
    this.setState({ today });
  }
  render() {
    const { errorMessage, successMessage, tag, title, tumbnail, hook } =
      this.state;
    return (
      <div className="bg">
        <div className="new-post-modal">
          {errorMessage !== "" && (
            <span className="noty error">{errorMessage}</span>
          )}
          {successMessage !== "" && (
            <span className="noty success">{successMessage}</span>
          )}
          <h1>New Post</h1>
          <div className="group-input">
            <label>
              Title <span className="required">required</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={title}
              className="form-input"
              placeholder="Title"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="group-input">
            <label>
              Hook <span className="required">required</span>
            </label>
            <input
              type="text"
              name="hook"
              required
              value={hook}
              className="form-input"
              placeholder="Hook"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="group-input">
            <label>
              Tumbnail <span className="required">required</span>
            </label>
            <input
              type="url"
              name="tumbnail"
              required
              value={tumbnail}
              className="form-input"
              placeholder="Tumbnail"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="group-input">
            <label>
              Tag <span className="required">required</span>
            </label>
            <FormSelect
              name="tag"
              value={tag}
              required
              defaul={"Select"}
              handleChange={this.handleChangeInput}
              options={["Book Review", "Lit Anatomy", "African Lit & Life"]}
            />
          </div>
          <code>
            {'<img src="https://" alt="image description" height="700px"/>'}
          </code>
          <SunEditor
            onChange={this.handleChange}
            enableToolbar={true}
            showToolbar={true}
            image={image}
            placeholder="Enter content"
            show={true}
            enable={true}
            setOptions={{
              height: 200,
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
          <div className="new-post-editor-footer">
            <span className="cancel-btn btn" onClick={this.handleCancel}>
              Cancel
            </span>
            <span className="post-topic-btn btn" onClick={this.handlePostTopic}>
              Post Blog{" "}
              {this.state.isLoading ? (
                <img src={loader} alt="loader gif" />
              ) : null}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  admin: selectAdmin,
  draft: selectDraft,
});
const mapDispatchToProps = (dispatch) => ({
  updateDraft: (draft) => dispatch(updateDraft(draft)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewPostModal);
