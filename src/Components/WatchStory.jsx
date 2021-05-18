import '../Scss/watchstory.scss';

const WatchStory = (props) => {
  const iconStyle = {
    height: '50px',
    width: '50px',
    backgroundImage: `url(${props.data.icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
  };
  return (
    <div id='watchStory'>
      <div className='icon' style={iconStyle}></div>
      <p className='text'>{props.data.text}</p>
    </div>
  );
};

export default WatchStory;
