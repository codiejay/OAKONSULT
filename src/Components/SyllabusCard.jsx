import '../Scss/syllabusCard.scss';
const SyllabusCard = (props) => {
  console.log(props.data.Title);
  return (
    <div id='Card'>
      <div className='CardTitle'>{props.data.Title}</div>
      <div className='cardContent'>
        <p className='classText'>{props.data.Content}</p>
        <div className='accessSyllabus'>Access This Syllabus</div>
      </div>
    </div>
  );
};

export default SyllabusCard;
