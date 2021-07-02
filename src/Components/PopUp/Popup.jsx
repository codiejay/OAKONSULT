import { useEffect, useState } from 'react';
import './Popup.scss';

const Popup = (props) => {
  let randomSelected = Math.floor(Math.random() * props.data.length);

  // console.log(props.data[randomSelected]);

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
            For God so loved the world, that He gave His only begotten Son, that
            whoever believes in Him shall not perish, but have eternal life. ...{' '}
          </p>
          <div className='popUpSource'>John 3:16</div>
        </div>

        <div className='horizontalLine'></div>
        <div className='popupImg'></div>
      </div>
    </div>
  );
};

export default Popup;

//  popUpText
// {
//   props.data[randomSelected].quote;
// }

// popUpSource
// {
//   props.data[randomSelected].bible_verse;
// }
