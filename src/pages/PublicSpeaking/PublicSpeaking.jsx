import React from 'react';
import { Helmet } from 'react-helmet';

import './PublicSpeaking.scss';

const PublicSpeaking = () => {
  return (
    <>
      <Helmet>
        <title>Public Speaking &mdash; Oak</title>
        <meta property='og:title' content='Public Speaking &mdash; Oak' />
        <meta property='og:type' content='website' />
        <meta name='description' content='' />
        <meta property='og:site_name' content='Oakonsult' />
      </Helmet>
      <div id='P_Sintro'>
        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>
            Public
            <br />
            Speaking
          </h1>
          {/* btn */}
          <div id='watchStory'>
            <div className='icon'></div>
            <p className='text'>My Message </p>
          </div>
        </div>

        <div className='introVideoButton'>
          <div className='hexagon'></div>
        </div>
      </div>
    </>
  );
};

export default PublicSpeaking;
