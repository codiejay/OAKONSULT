import '../Scss/syllabusCard.scss';
const SyllabusCard = (props) => {
  return (
    <div id='Card'>
      <div className='CardTitle'>The Hope</div>
      <div className='cardContent'>
        <p className='classText'>
          OAK’s mandate is to introduce the gospel of Christ to Carers. We
          empower Carers and families dealing with disability matters with
          biblical principles and truth that will enable them find fulfilment at
          whatever stage they might be in their individual journeys.
        </p>
        <div className='accessSyllabus'>Access This Syllabus</div>
      </div>
    </div>
  );
};

export default SyllabusCard;
