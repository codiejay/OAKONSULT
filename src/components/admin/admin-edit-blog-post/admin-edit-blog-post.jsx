import React from "react";
import { connect } from "react-redux";
import { firestore } from "../../../firebase/config";
import { createStructuredSelector } from "reselect";
import {
  selectAdmin,
  selectCurrentPage,
  selectDraft,
} from "../../../redux/admin/selectors";
import { updateDraft } from "../../../redux/admin/actions";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import loader from "../../../assets/loader.gif";
import "suneditor/dist/css/suneditor.min.css";
import FormSelect from "../../form-select/form-select";

import "./admin-edit-blog-post.scss";

class AdminEditBlogPost extends React.Component {
  state = {
    title: `${this.props.data.title}`,
    tumbnail: `${this.props.data.tumbnail}`,
    tag: `${this.props.data.tag.split("-").join(" ")}`,
    hook: `${this.props.data.hook}`,
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
    const draftFilter = this.props.draft.filter(
      (item, index) => item.id !== this.props.data.id
    );
    if (
      body.trim() !== "" ||
      title.trim() !== "" ||
      tag !== "" ||
      tumbnail.trim() !== "" ||
      hook.trim() !== ""
    ) {
      this.setState({ isLoading: !this.state.isLoading });
      const updateDraft = {
        id: this.props.data.id,
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
      this.props.updateDraft([...draftFilter, updateDraft]);
      this.props.setEditing(false);
    }
    this.props.setEditing(false);
  };
  handleUpdateTopic = async () => {
    const { body, title, tag, tumbnail, hook } = this.state;
    if (
      body.trim() === "" ||
      title.trim() === "" ||
      tag === "" ||
      tumbnail.trim() === "" ||
      hook.trim() === ""
    ) {
      this.setState({ errorMessage: "All fields is required" });
      return;
    }
    this.setState({ isLoading: !this.state.isLoading });
    const updateTopic = {
      body,
      title,
      hook,
      tumbnail,
      tag: tag.split(" ").join("-"),
    };
    try {
      await firestore
        .collection("blogs")
        .doc(this.props.data.id)
        .update(updateTopic);
      this.setState({
        isLoading: !this.state.isLoading,
        successMessage: "Update succesfully",
      });
      this.props.setEditing(false);
    } catch (error) {
      this.setState({ errorMessage: "Failed, try again" });
    }
  };
  handlePostTopic = async () => {
    const { body, title, tag, tumbnail, hook } = this.state;
    const draftFilter = this.props.draft.filter(
      (item, index) => item.id !== this.props.data.id
    );
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
      id: this.props.data.id,
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
      await firestore.collection("blogs").doc(this.props.data.id).set(newTopic);
      this.props.updateDraft([...draftFilter]);
      this.setState({
        isLoading: !this.state.isLoading,
        successMessage: "Blog successfully posted",
      });
      this.props.setEditing(false);
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
        <div className="admin-edit-blog-post-modal">
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
              defaul={this.props.data.tag}
              handleChange={this.handleChangeInput}
              options={["Book Review", "Lit Anatomy", "African Lit & Life"]}
            />
          </div>
          <code>
            {'<img src="https://" alt="image description" height="700px"/>'}
          </code>
          <SunEditor
            setContents={this.props.data.body}
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
            <span
              className="cancel-btn btn"
              onClick={() =>
                this.props.currentPage === "draft"
                  ? this.handleCancel()
                  : this.props.setEditing(false)
              }
            >
              Cancel
            </span>
            <span
              className="post-topic-btn btn"
              onClick={() =>
                this.props.currentPage === "draft"
                  ? this.handlePostTopic()
                  : this.handleUpdateTopic()
              }
            >
              Update Blog{" "}
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
  currentPage: selectCurrentPage,
  draft: selectDraft,
});
const mapDispatchToProps = (dispatch) => ({
  updateDraft: (draft) => dispatch(updateDraft(draft)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminEditBlogPost);
