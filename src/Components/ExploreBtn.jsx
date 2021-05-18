import '../Scss/exploreBtn.scss';

const ExploreBtn = (props) => {
  const iconStyle = {
    height: '50px',
    width: '50px',
    backgroundImage: `url(${props.data[1]})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
  };
  return (
    <div id='btn'>
      <div id='icon' style={iconStyle}></div>
      <p>{props.data[0]}</p>
    </div>
  );
};
export default ExploreBtn;
