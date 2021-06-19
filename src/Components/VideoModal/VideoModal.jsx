import { useState } from 'react';
import './VideoModal.scss';

const VideoModal = (props) => {
  return (
    <div id='videoPlayer'>
      <iframe
        src='https://www.youtube.com/embed/N5rtt_IDVsA'
        title='OAKONSULT'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
