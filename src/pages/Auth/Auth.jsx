import React, { Component } from "react";
import { auth } from "../../firebase/config";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import loader from "../../assets/loader.gif";

import "./styles.scss";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      isShowPassword: false,
      isLoading: false,
    };
  }
  handleToggleShowPassword = () =>
    this.setState({ isShowPassword: !this.state.isShowPassword });
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      this.setState({ isLoading: true });
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      error.code === "auth/wrong-password"
        ? this.setState({
            isLoading: false,
            errorMessage:
              "The password is invalid or the user does not have a password.",
          })
        : error.code === "auth/user-not-found"
        ? this.setState({
            isLoading: false,
            errorMessage:
              "There is no user record corresponding to this identifier.",
          })
        : this.setState({ isLoading: false, errorMessage: "Wierd" });
    }

    // this.setState({ email: '', password: '' });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errorMessage: "",
    });
  };
  render() {
    const { email, password, errorMessage, isShowPassword, isLoading } =
      this.state;
    return (
      <div className="admin-auth">
        <div>
          {" "}
          <h3 className="title">Admin Login</h3>
          {errorMessage !== "" ? (
            <span className="error">{errorMessage}</span>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              required
              handleChange={this.handleChange}
              label="Email"
            />
            <FormInput
              type={isShowPassword ? "text" : "password"}
              name="password"
              value={password}
              required
              handleChange={this.handleChange}
              label="Password"
              toggleShowPassword={this.handleToggleShowPassword}
              isShowPass={this.state.isShowPassword}
            />
            <div className="buttons">
              <CustomButton type="button" onClick={this.handleSubmit}>
                Sign In {isLoading ? <img src={loader} alt="Loader" /> : null}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
