import { useEffect, useState } from "react";
import "./Popup.scss";

const Popup = (props) => {
  let displayValue;
  const [showPopUp, changeShowPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      changeShowPopUp(true);
    }, 5000);
  }, []);

  showPopUp
    ? (displayValue = { display: "flex" })
    : (displayValue = { display: "none" });

  return (
    <div id="bg_Blur" style={displayValue}>
      <div id="popUp">
        <div
          className="close"
          onClick={() => {
            changeShowPopUp(false);
          }}
        ></div>
        <div className="popUpcontent">
          <h2 className="popUpTitle">GOD PROMISES</h2>
          {/* <p className='popUpText'>{props.data[0].quote}</p>
          <div className='popUpSource'>{props.data[0].bible_verse}</div> */}
        </div>

        <div className="horizontalLine"></div>
        <div className="popupImg"></div>
      </div>
    </div>
  );
};

export default Popup;
