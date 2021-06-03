import React, { Component } from 'react';
import '../Scss/homepage.scss';

// Images
import LibraryImg from '../Assets/Library.svg';
import HeartImg from '../Assets/heart.svg';
import Star from '../Assets/star.svg';
import ChatIcon from '../Assets/ChatIcon.svg';
import PlayIcon from '../Assets/playbutton.svg';
import StackIcon from '../Assets/stackIcon.svg';
import syllabusIcon from '../Assets/syllabusIcon.svg';

// External components
import ExploreBtn from '../Components/ExploreBtn';
import SectionIcon from '../Components/SectionIcon';
import UserTag from '../Components/UserTag';
import TagDetail from '../Components/TagDetails';
import WatchStory from '../Components/WatchStory';
import SyllabusCard from '../Components/SyllabusCard';

// Internal Component

const Homepage = () => {
  return (
    <section id='homePage'>
      {/* Section 1 */}

      <div id='intro'>
        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>
            that you may have
            <br /> life, and that more
            <br /> abundantly
          </h1>
          <ExploreBtn data={['Explore our library', LibraryImg]} />
        </div>
        <div className='introVideoButton'>
          <div className='hexagon'>
            <div id='play_btn'></div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div id='whoAreYou'>
        <SectionIcon image={HeartImg} />
        <div id='whoAreYouContent'>
          <section className='AboutDeets'>
            <h1>
              Are you a Parent Carer,
              <br /> Sibling of a child or young person with disabilities/
              special needs or a faith based organisation ?
            </h1>
            <p>
              OAK’s mandate is to introduce the gospel of Christ to Carers. We
              empower Carers and families dealing with disability matters with
              biblical principles and truth.
            </p>
            <div className='tagGroup'>
              <UserTag data={['For Parents']} />
              <UserTag data={['For Siblings']} />
              <UserTag data={['For Carers']} />
            </div>
          </section>
          <section className='userCategories'>
            <TagDetail
              data={[
                {
                  tagName: 'For Parents.',
                  tagContent:
                    'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families',
                },
              ]}
            />
            <TagDetail
              data={[
                {
                  tagName: 'For Siblings.',
                  tagContent:
                    'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families',
                },
              ]}
            />
            <TagDetail
              data={[
                {
                  tagName: 'For Carers.',
                  tagContent:
                    'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families',
                },
              ]}
            />
          </section>
        </div>
      </div>

      {/* Section 3 */}
      <div id='RssCategories'>
        <h2 id='sectionTitle'>
          Something
          <br /> for everyone
        </h2>
        <p id='sectionDetails'>
          OAK’s mandate is to introduce the gospel of Christ to Carers. We
          empower Carers and families dealing with disability matters with
          biblical principles and truth that will enable them find fulfilment at
          whatever stage they might be in their individual journeys.
        </p>

        <div className='cards_mother'>
          <div className='rssCard cardOne'>
            <h2 className='cardTitle'>
              FOR CHURCHES AND
              <br /> FAITH-BASED ORGANISATIONS
            </h2>
            <p className='cardContent'>
              OAK’s mandate is to introduce the gospel of Christ to Carers. We
              empower Carers and families dealing with disability matters with
              biblical principles.
            </p>
            <div id='learnMore_btn'>
              <p>Learn More</p>
              <div className='learnMore_icon'></div>
            </div>
          </div>

          <div className='rssCard cardTwo'>
            <h2 className='cardTitle'>FOR PARENT CARERS</h2>
            <p className='cardContent'>
              OAK’s mandate is to introduce the gospel of Christ to Carers. We
              empower Carers and families dealing with disability matters with
              biblical principles.
            </p>
            <div id='learnMore_btn'>
              <p>Learn More</p>
              <div className='learnMore_icon'></div>
            </div>
          </div>

          <div className='rssCard cardThree'>
            <h2 className='cardTitle'>PUBLIC SPEAKING</h2>
            <p className='cardContent'>
              OAK’s mandate is to introduce the gospel of Christ to Carers. We
              empower Carers and families dealing with disability matters with
              biblical principles.
            </p>
            <div id='learnMore_btn'>
              <p>Learn More</p>
              <div className='learnMore_icon'></div>
            </div>
          </div>

          <div className='rssCard cardFour'>
            <h2 className='cardTitle'>TRAINING AND RESOURCES</h2>
            <p className='cardContent'>
              OAK’s mandate is to introduce the gospel of Christ to Carers. We
              empower Carers and families dealing with disability matters with
              biblical principles.
            </p>
            <div id='learnMore_btn'>
              <p>Learn More</p>
              <div className='learnMore_icon'></div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}

      <div id='aboutFounder'>
        <SectionIcon image={Star} />
        <div className='aboutContent'>
          <div id='Q_A'>
            <h1>Who?</h1>
            <p>
              Olufunke has lived a life of ‘above and beyond’ in the face of
              many difficult and challenging situations. Her enduring vision is
              to see Carers within this sphere empowered enough to push forward
            </p>
            <h1>Why?</h1>
            <p>
              Olufunke has lived a life of ‘above and beyond’ in the face of
              many difficult and challenging situations. Her enduring vision is
              to see Carers within this sphere empowered enough to push forward
            </p>
          </div>
          <div id='Founder'>
            <div id='founderImg'></div>
            <h1>OLUFUNKE ADELOYE</h1>
            <ExploreBtn data={['Speak With Me', ChatIcon, true]} />
          </div>
          <div id='aboutFounder'>
            <p className='founderDetails'>
              Olufunke has a Diploma in Personal Performance Coaching (Merit
              Award) from the Coaching Academy, UK, MA International Social
              Policy from the University of Kent, Canterbury, UK; M.Sc.
              Geography (Area of Specialization: Population Geography and
              Resources Analysis)
            </p>
            <p className='founderDetails'>
              Olufunke has a Diploma in Personal Performance Coaching (Merit
              Award) from the Coaching Academy, UK, MA International Social
              Policy from the University of Kent, Canterbury, UK; M.Sc.
              Geography (Area of Specialization: Population Geography and
              Resources Analysis)
            </p>
            <p className='founderDetails'>
              Olufunke has a Diploma in Personal Performance Coaching (Merit
              Award) from the Coaching Academy, UK, MA International Social
              Policy from the University of Kent, Canterbury
            </p>
            <WatchStory data={{ text: 'Watch My Story', icon: PlayIcon }} />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div id='syllabusIntro'>
        <SectionIcon image={StackIcon} />
        <div id='syllabusIntroContent'>
          <div id='syllabusIntroTitle'>
            <h2>
              The Complete
              <br /> Syllabus <br /> for everyone.
              <br />
              for you
            </h2>
            <ExploreBtn data={['Browse Our Syllabus', syllabusIcon]} />
          </div>
          <div id='syllabusCards'>
            <SyllabusCard
              data={{
                Title: 'The Hope',
                Content:
                  'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families dealing with disability matters with biblical principles and truth that will enable them find fulfilment at whatever stage they might be in their individual journeys.',
              }}
            />
            <SyllabusCard
              data={{
                Title: 'The Light',
                Content:
                  'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families dealing with disability matters with biblical principles and truth that will enable them find fulfilment at whatever stage they might be in their individual journeys.',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
