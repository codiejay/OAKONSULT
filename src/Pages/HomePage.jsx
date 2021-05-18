import React from 'react';
import '../Scss/homepage.scss';

// Images
import LibraryImg from '../Assets/Library.svg';
import HeartImg from '../Assets/heart.svg';

// components
import ExploreBtn from '../Components/ExploreBtn';
import SectionIcon from '../Components/SectionIcon';
import UserTag from '../Components/UserTag';
import TagDetail from '../Components/TagDetails';

const Homepage = () => {
  return (
    <section id='homePage'>
      {/* intro */}
      <div id='intro'>
        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>that you may have life, and that more abundantly</h1>
          <ExploreBtn data={['Explore our library', LibraryImg]} />
        </div>

        <div className='introVideoButton'>
          <div className='hexagon'></div>
        </div>
      </div>

      <div id='whoAreYou'>
        <SectionIcon image={HeartImg} />
        <div id='whoAreYouContent'>
          <section className='AboutDeets'>
            <h1>Are You a Parent? A Sibling or a full time Carer?</h1>
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
    </section>
  );
};

export default Homepage;
