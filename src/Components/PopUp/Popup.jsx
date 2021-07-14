import { useEffect, useState } from 'react';
import './Popup.scss';

const Popup = (props) => {
  // console.log(props.data.length > 0);
  let randomSelected = props.data && Math.floor(Math.random() * props.data.length);
  // console.log(randomSelected);
  let displayValue;
  const [showPopUp, changeShowPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      changeShowPopUp(true);
    }, 5000);
  }, []);

  showPopUp
    ? (displayValue = { display: 'flex' })
    : (displayValue = { display: 'none' });

  return (
    <div id='bg_Blur' style={displayValue}>
      <div id='popUp'>
        <div
          className='close'
          onClick={() => {
            changeShowPopUp(false);
          }}
        ></div>
        <div className="popUpcontent">
          <h2 className="popUpTitle">GOD PROMISES</h2>
          <p className="popUpText">
            {props.data.length > 0 && props.data[randomSelected].quote}
          </p>
          <div className="popUpSource">
            {props.data.length > 0 && props.data[randomSelected].bible_verse || ""}
          </div>
        </div>

        <div className='horizontalLine'></div>
        <div className='popupImg'></div>
      </div>
    </div>
  );
};

export default Popup;
