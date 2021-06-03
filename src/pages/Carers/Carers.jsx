import React from 'react';
import { Helmet } from 'react-helmet';

import './Carers.scss';

const Carers = () => {
  return (
    <>
      <Helmet>
        <title>Careers &mdash; Oak</title>
        <meta property='og:title' content='Churches &mdash; Oak' />
        <meta property='og:type' content='website' />
        <meta name='description' content='' />
        <meta property='og:site_name' content='Oakonsult' />
      </Helmet>
      <div id='Carers_intro'>
        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>
            For Parent
            <br />
            Carers
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

export default Carers;
