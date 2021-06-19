import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LibraryImg from '../../Assets/Library.svg';
import GetCourseModal from '../../componentz/admin/GetCourseModal/GetCourseModal';
import Dialog from '../../componentz/Dialog/Dialog';

import './Carers.scss';

const Carers = () => {
  const [courseType, setCourseType] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
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
          <h1 id='quote'>Parent Carers</h1>
          <p id='quoteText'>
            At OAKONSULT we are passionate about empowering and supporting
            Carers to garner inner strength and forge ahead in their individual
            lives notwithstanding the associated challenges.
          </p>
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
      <div id='Carer_goals'>
        <div className='bgLayer'>
          <div id='heartIcon'></div>
          <p>
            Providing care for children or family members with disabilities,
            complex or life limiting conditions impact Carers in different ways.
            This could be physical, emotional, social, financial, or spiritual
            just to mention a few; and in many instances, a combination of all
            these factors.
            <br />
            <br />
            In my personal experience, it has been a combination of all these
            factors and so much more! I have learnt however, that the decisions
            we make or are not able to make through our individual journeys in
            this terrain go a long way to determine the ‘what’, ‘how’, and
            ‘when’ of our lives.
          </p>
        </div>
      </div>
      <div id='forYou'>
        <h1>Something for you</h1>
        <p>
          At OAKONSULT we are passionate about empowering and supporting Carers
          to garner inner strength and forge ahead in their individual lives
          notwithstanding the associated challenges.
          <br />
          <br />
          Using biblical principles in workshops and bespoke training programs,
          we seek to equip Carers with necessary skills to support themselves
          and enable them to carry out their caring responsibilities
          effectively.
          <br />
          <br />
          These training programs provide life transforming experience, potent
          and sustainable for purposeful living.
        </p>
      </div>
      <div id='availiableCourses'>
        <h2>Available Courses/Materials</h2>
        <div className='courses'>
          <div className='carersCourse '>
            <div className='blueTag'></div>
            <div className='courseContainer'>
              <h3>
                Bespoke training
                <br /> programs for Carers
              </h3>
              <ul>
                <li>The Carer and Time Management</li>
                <li>The Carer and Relationship Management</li>
                <li>The Carer’s Career- A possibility?</li>
                <li> Getting Carers into paid work</li>
                <li>Workplace Productivity and the Carer</li>
                <li> Financial Matter for Carers</li>
                <li>Faith and the Carer (A Free Course)</li>
              </ul>
              <div
                className='getCourse'
                onClick={() => {
                  setCourseType('Bespoke training programs for Carers');
                  setDialogVisible(true);
                }}
              >
                GET THIS COURSE
              </div>
            </div>
          </div>
          <div className='carersCourse'>
            <div className='blueTag'></div>
            <div className='courseContainer'>
              <h3>PROJECT ME</h3>
              <p id='ProjectMeAim'>
                ‘Project Me’ aims to support the Carer to find fulfilment and
                purpose
                <br /> in her caring role; and to push beyond boundaries for
                herself!
                <br /> Project Me will therefore:
              </p>

              <ul>
                <li>give Carers the courage to let go</li>
                <li>allow Carers to set their minds free to dream again</li>
                <li>
                  give Carers the encouragement needed to pursue personal dreams
                </li>
                <li>
                  liberate Carers from the ‘guilt’ of personal success or
                  achievement
                </li>
                <li>
                  give opportunities for Carers to learn from and give support
                  to one another.
                </li>
              </ul>
              <div
                className='getCourse'
                onClick={() => {
                  setCourseType('Project Me');
                  setDialogVisible(true);
                }}
              >
                GET THIS COURSE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This button uses the format of ExploreBtn.jsx and ExploreBtn.scss with little modification */}
      <Link to='blogs/for-parents'>
        <div
          className='SeeRelatedArticle'
          id='btn'
          style={{
            backgroundColor: '#0aa7ff',
            marginBottom: '6rem',
            marginTop: '3rem',
          }}
        >
          <div
            id='icon'
            style={{
              height: '50px',
              width: '50px',
              backgroundImage: `url(${LibraryImg})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
            }}
          ></div>
          <p>See Related Article</p>
        </div>
      </Link>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <GetCourseModal
          courseType={courseType}
          setDialogVisible={setDialogVisible}
        />
      </Dialog>
    </>
  );
};

export default Carers;
