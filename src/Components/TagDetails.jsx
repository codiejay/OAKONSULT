import '../Scss/TagDetails.scss';

const TagDetail = (props) => {
  let color;
  if (props.data[0].tagName) {
    switch (props.data[0].tagName) {
      case 'For Parents.':
        color = { background: '#0AA7FF' };
        break;
      case 'For Siblings.':
        color = { background: '#FF0AC9' };
        break;
      case 'For Carers.':
        color = { background: '#FFBA0A' };
        break;

      default:
        console.log("There's a bug in tag color switcher");
        break;
    }
  }
  return (
    <div id='tagDetails'>
      <div className='tagColor' style={color}></div>

      <div className='tagDeets'>
        <h3>{props.data[0].tagName}</h3>
        <p>{props.data[0].tagContent}</p>
      </div>
    </div>
  );
};

export default TagDetail;
