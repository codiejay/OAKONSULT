import { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoModal.scss';

const VideoModal = (props) => {
  let link = props.data[0];
  return (
    <div id='videoPlayer'>
      <iframe
        src={link}
        title='OAKONSULT'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
