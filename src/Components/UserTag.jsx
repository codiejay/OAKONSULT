import React from 'react';
import '../Scss/userTag.scss';

const UserTag = (props) => {
  let color;
  if (props.data[0]) {
    switch (props.data[0]) {
      case 'For Parent Carers':
        color = { background: '#0AA7FF' };
        break;
      case 'For Churches':
        color = { background: '#FF0AC9' };
        break;

      default:
        console.log("There's a bug in tag color switcher");
        break;
    }
  }
  return (
    <div id='user_tag' style={color}>
      {props.data[0]}
    </div>
  );
};

export default UserTag;
