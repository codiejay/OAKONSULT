import { useEffect, useState } from 'react';
import './Popup.scss';

const Popup = (props) => {
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
        <div className='popUpcontent'>
          <h2 className='popUpTitle'>GOD PROMISES</h2>
          <p className='popUpText'>
            Do not be afraid—I am with you!
            <br /> I am your God—let nothing terrify you!
            <br /> I will make you strong and help you;
            <br /> I will protect you and save you.
          </p>
          <div className='popUpSource'>Isaiah 41:10 </div>
        </div>

        <div className='horizontalLine'></div>
        <div className='popupImg'></div>
      </div>
    </div>
  );
};

export default Popup;
