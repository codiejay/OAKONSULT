import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Scss/homepage.scss';
import '../Scss/mediaQuery.scss';

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
import Dialog from '../componentz/Dialog/Dialog';
import InviteToSpeakMOdal from '../componentz/InviteToSpeakMOdal/InviteToSpeakMOdal';
import VideoModal from '../Components/VideoModal/VideoModal';

// Internal Component

const Homepage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [DisplayModal, ChangeDisplayModal] = useState(false);

  let showVideoPlayer;
  DisplayModal
    ? (showVideoPlayer = { display: 'flex' })
    : (showVideoPlayer = { display: 'none' });

  return (
    <>
      <section id='homePage'>
        <div
          id='VideoModal'
          style={showVideoPlayer}
          onClick={() => {
            // ChangeDisplayModal(false);
          }}
        >
          <VideoModal
            data={['https://www.youtube.com/embed/N5rtt_IDVsA']}
            closeFunc={() => {
              ChangeDisplayModal(false);
            }}
          />
        </div>

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
            <Link to='/blogs'>
              <ExploreBtn data={['Explore our library', LibraryImg]} />
            </Link>
          </div>

          <div className='introVideoButton'>
            <div className='hexagon'>
              <div
                id='play_btn'
                onClick={() => {
                  ChangeDisplayModal(true);
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section 2 */}

        <div id='whoAreYou'>
          <SectionIcon image={HeartImg} />
          <div id='whoAreYouContent'>
            <section className='AboutDeets'>
              <h1>
                Are you a Parent Carer of a Child /Young Person with
                Disabilities or Special Needs OR A Faith-Based Organisation
              </h1>
              <p>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles and truth.
              </p>
              <div className='tagGroup'>
                <UserTag data={['For Parent Carers']} />
                <UserTag data={['For Churches']} />
              </div>
            </section>
            <section className='userCategories'>
              <TagDetail
                data={[
                  {
                    tagName: 'FOR PARENT CARERS',
                    tagContent:
                      'OAK’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families',
                  },
                ]}
              />
              <TagDetail
                data={[
                  {
                    tagName: 'FOR CHURCHES',
                    tagContent:
                      'OAK’s mandate is to introduce the gospel of Christ to Churches. We empower Churches and families',
                  },
                ]}
              />
            </section>
          </div>
        </div>

        {/* Section 3 */}
        <div id='RssCategories'>
          <h2 id='sectionTitle'>OUR OFFERINGS</h2>
          <p id='sectionDetails'>
            OAK’s mandate is to introduce the gospel of Christ to Carers. We
            empower Carers and families dealing with disability matters with
            biblical principles and truth that will enable them find fulfilment
            at whatever stage they might be in their individual journeys.
          </p>

          <div className='cards_mother'>
            <div className='rssCard parents'>
              <h2 className='cardTitle'>FOR PARENT CARERS</h2>
              <p className='cardContent'>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles.
              </p>
              <Link to='./carers'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard churches'>
              <h2 className='cardTitle'>
                FOR CHURCHES AND
                <br /> FAITH-BASED ORGANISATIONS
              </h2>
              <p className='cardContent'>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles.
              </p>
              <Link to='./churches'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard training'>
              <h2 className='cardTitle'>TRAINING AND RESOURCES</h2>
              <p className='cardContent'>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles.
              </p>
              <Link to='./training-and-resourcing'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard publicSpeaking'>
              <h2 className='cardTitle'>PUBLIC SPEAKING</h2>
              <p className='cardContent'>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles.
              </p>
              <Link to='./public-speaking'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
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
                many difficult and challenging situations. Her enduring vision
                is to see Carers within this sphere empowered enough to push
                forward
              </p>
              <h1>Why?</h1>
              <p>
                Olufunke has lived a life of ‘above and beyond’ in the face of
                many difficult and challenging situations. Her enduring vision
                is to see Carers within this sphere empowered enough to push
                forward
              </p>
            </div>
            <div id='Founder'>
              <div id='founderImg'></div>
              <h1>OLUFUNKE ADELOYE</h1>
              <ExploreBtn
                onClick={() => setDialogVisible(true)}
                data={['Speak With Me', ChatIcon, true]}
              />
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
              <h2>OAKONSULT’s TRAINING PROGRAMS</h2>
              <Link to='./training-and-resourcing'>
                <ExploreBtn
                  data={['Browse Our Training Programs', syllabusIcon]}
                />
              </Link>
            </div>

            <div id='syllabusCards'>
              <SyllabusCard
                data={{
                  Title: 'Beyond Suffering',
                  Content:
                    ' Beyond Suffering Course has been designed by the Joni and Friends Ministry (USA) to explore the problem of suffering in general and then to examine ways in which the disability community provides the church with a dynamic model of spiritual transformation.',

                  Link: 'training-and-resourcing',
                }}
              />

              <SyllabusCard
                data={{
                  Title: 'Project Me',
                  Content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

                  Link: 'training-and-resourcing',
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <InviteToSpeakMOdal setDialogVisible={setDialogVisible} />
      </Dialog>
    </>
  );
};

export default Homepage;
