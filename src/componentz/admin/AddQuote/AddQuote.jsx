import React, { useState } from "react";
import { AntDesign, Ionicons } from "react-web-vector-icons";
import CustomInput from "../../CustomInput/CustomInput";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Spacing from "../../Spacing/Spacing";
import Spinner from "../../Spinner/Spinner";
import { useSelector } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import { colors } from "../../../constants/Colors";
import { OnAddQuote } from "../../../firebase/firestore";

import "./styles.scss";
const AddQuote = ({ setDialogVisible }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const galleryData = {
      quote,
      imageUrl: "",
    };
    if (quote.trim() === "") {
      setLoading(false);
      setErrorMessage(`Photo url is required!`);
      return;
    }
    try {
      await OnAddQuote(galleryData);
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
        <div className="flex-center add-category">
          <div className="flex-vertical-center add-category-head">
            <span>New Quote</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons quote="md-close" size={20} color={colors.white} />
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
          <Spacing height="2em" />
          <CustomInput
            label="Quote"
            value={quote}
            type={"text"}
            onChange={({ target }) => setQuote(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Add"
            onClick={onSubmit}
            className="add-category-btn"
          />
        </div>
      )}
    </>
  );
};

export default AddQuote;
