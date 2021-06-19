import './Programmes.scss';

const Programmes = () => {
  const ProgrammeCard = (props) => {
    return (
      <div id='ProgrammeCard'>
        <div id='dateTag'>{props.data.date}</div>
        <div id='card'>
          <h2>{props.data.title}</h2>
          <p>{props.data.content}</p>
          <div id='Register'>REGISTER NOW</div>
        </div>
      </div>
    );
  };

  return (
    <div id='Programmes'>
      <div id='ProgrammesIntro'>
        <h2 id='Title'>
          PROGRAMMES
          <br /> TAILORED
          <br /> FOR EVERYONE
        </h2>
        <div id='calenderImage'></div>
      </div>
      <div id='programmesSection'>
        <div id='selectionNavBar'>
          <div id='current' className='programSelection'>
            CURRENT PROGRAMS
          </div>
          <div id='past' className='programSelection'>
            PAST PROGRAMS
          </div>
        </div>

        <div id='AvailiableProgrammes'>
          <ProgrammeCard
            data={{
              date: '20th July 2020',
              title: 'You are closer then you think- keep going',
              content:
                'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the',
            }}
          />
          <ProgrammeCard
            data={{
              date: '11th April 1997',
              title: 'If you believe then you will- grow',
              content:
                'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Programmes;
