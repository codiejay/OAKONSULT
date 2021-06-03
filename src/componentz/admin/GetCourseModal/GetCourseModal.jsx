import React, { useState } from "react";
import { AntDesign, Ionicons } from "react-web-vector-icons";
import CustomInput from "../../CustomInput/CustomInput";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Spacing from "../../Spacing/Spacing";
import Spinner from "../../Spinner/Spinner";
import CustomButton from "../../CustomButton/CustomButton";
import { colors } from "../../../constants/Colors";
import { onGetCourse } from "../../../firebase/firestore";

import "./styles.scss";
const GetCourseModal = ({ setDialogVisible }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const branchData = {
      name,
      email,
      phone,
    };
    if (name.trim() === "" || email.trim() === "") {
      setLoading(false);
      setErrorMessage(`All fields are required!`);
      return;
    }
    try {
      await onGetCourse(branchData);
      setLoading(false);
      setDialogVisible(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner style={{ height: "20vh" }} />
      ) : (
        <div className="flex-center add-employee">
          <div className="flex-vertical-center add-employee-head">
            <span>Get Course</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons name="md-close" size={20} color={colors.white} />
            </div>
          </div>
          <Spacing height="2em" />
          {errorMessage !== "" ? (
            <CustomPopUp
              message={`${errorMessage}`}
              type={"error"}
              customStyles={{ backgroundColor: "red" }}
              customTextStyles={{ color: "#ffffff", textAlign: "center" }}
            />
          ) : null}
          <Spacing height="1em" />
          <CustomInput
            label="Name"
            value={name}
            type={"text"}
            onChange={({ target }) => setName(target.value)}
            required
          />
          W
          <Spacing height="2em" />
          <CustomInput
            label="Phone Number"
            value={phone}
            type={"number"}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Submit"
            onClick={onSubmit}
            className="add-employee-btn"
          />
        </div>
      )}
    </>
  );
};

export default GetCourseModal;
