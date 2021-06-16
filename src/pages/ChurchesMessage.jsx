import Main from '../Components/Main';
import ExploreBtn from '../Components/ExploreBtn';
import '../Scss/churchMessage.scss';
import WatchStory from '../Components/WatchStory';
import PlayIcon from '../Assets/playbutton.svg';

const Churches = () => {
  return (
    <>
      <div id='Church_intro'>
        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>
            FOR CHURCHES
            <br /> AND FAITH-BASED
            <br /> ORGANISATIONS.
          </h1>
          <p id='quoteText'>
            We must look beyond reaching out to people with disabilities as an
            act of benevolence, but as reaching out to people who are also among
            the heirs of salvation, joint heirs of the kingdom whose souls are
            also precious in God’s sight. Gen 1:27; Romans 8:17
          </p>
          {/* btn */}
          <div id='watchStory'>
            <div className='icon'></div>
            <p className='text'>My Message To Churches</p>
          </div>
        </div>

        <div className='introVideoButton'>
          <div className='hexagon'></div>
        </div>
      </div>
      <div id='Churches_goals'>
        <div className='bgLayer'>
          <div id='heartIcon'></div>
          <p>
            “…Then the owner of the house became angry and said to his servant,
            ‘Go out quickly into the streets and alleys of the city, and bring
            in the poor, the crippled, the blind, and the lame.’ So, the master
            told his servant, ‘Go out to the highways and hedges and compel them
            to come in, so that my house will be full…” - Luke 14:21-23
            <br />
            <br /> Only the gospel of Jesus can make a lasting, significant, and
            eternal difference in the lives of people with disabilities; just
            like it is for every living being on the surface of the earth! The
            needs of families dealing with disabilities go beyond charitable
            offers, as helpful as these are.
          </p>
        </div>
      </div>
      <div id='Churches_forYou'>
        <h1>Olufunke will inspire your audience to:</h1>
        <ul>
          <li>
            Over one billion people, or 15% of the world’s population, live with
            some form of disability, and of these, between 110 and 190 million
            have significant difficulties in functioning, according to the World
            Report on Disability
          </li>
          <li>
            Only 5 to 10% of the world’s disabled are effectively reached with
            the gospel, making the disability community one of the largest
            unreached — some say under-reached — or hidden people groups in the
            world
          </li>
          <li>
            “90% – 95% of the world’s disabled people never hear the Gospel”
          </li>
          <li>
            There is a higher possibility of divorce or separation among
            families that are affected by disabilities.
          </li>
          <li>
            More than 90% of church-going special needs parents cited the most
            helpful support to be a “welcoming attitude toward people with
            disabilities.”
          </li>
        </ul>
      </div>
      <div id='OurSolutions'>
        <div id='WhatToDo'>
          <h2>OAKONSULT actively seek to bridge this gap by:</h2>
          <ul>
            <li>
              Creating awareness, encouraging churches to openly talk about
              disability and the Christian faith
            </li>
            <li>
              Engaging church leadership and sharing about disability ministry
            </li>
            <li>
              Promoting the culture of inclusion in churches through training
              and development
            </li>
            <li>
              Providing educational and practical resources to support churches
              in this mission
            </li>
            <li>
              Facilitating further discussion on the Theology of Disability and
              Suffering
            </li>
          </ul>
        </div>
        <div id='HowToDoWhatToDo'>
          <h3>To achieve the Stated, we:</h3>
          <ul>
            <li>
              Engage church leadership to deliberate on how the church could be
              more inclusive and extend the love of Christ to the disability
              community
            </li>
            <li>
              Facilitate conversation and upskill churches on how to start
              special needs group/unit, recruit volunteers and create a culture
              of acceptance in the church
            </li>
            <li>
              Support churches with practical resources for continuous
              development on disability issues
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Churches;
