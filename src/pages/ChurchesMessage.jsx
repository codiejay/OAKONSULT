import Main from '../Components/Main';
import ExploreBtn from '../Components/ExploreBtn';
import '../Scss/churchMessage.scss';
import WatchStory from '../Components/WatchStory';
import PlayIcon from '../Assets/playbutton.svg';

const ChurchMessage = () => {
  return (
    <Main>
      <div id='intro'>
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
    </Main>
  );
};

export default ChurchMessage;
