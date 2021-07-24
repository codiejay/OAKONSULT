import { useState } from 'react';
import './Programmes.scss';
import ProgrammeCard from './ProgrammeCard';
import PastProgrammes from './PastProgrammes';
import CurrentProgrammes from './CurrentProgrammes';

const Programmes = () => {
  const [ProgrammeSort, ChangeProgrammeSort] = useState('Current');
  let currentStyle;
  let pastStyle;
  let colorSwitch = { currentColor: '#009b9b', pastColor: '#009b9b99' };

  switch (ProgrammeSort) {
    case 'Current':
      console.log('current programmes');
      currentStyle = { display: 'block' };
      pastStyle = { display: 'none' };
      colorSwitch.currentColor = '#009b9b';
      colorSwitch.pastColor = '#009b9b99';

      break;
    case 'Past':
      console.log('Past programmes');
      currentStyle = { display: 'none' };
      pastStyle = { display: 'block' };
      colorSwitch.currentColor = '#009b9b99';
      colorSwitch.pastColor = '#009b9b';

      break;
    default:
      console.log('Error in programme switcher');
  }

  return (
    <div id='Programmes'>
      <div id='ProgrammesIntro'>
        <h2 id='Title'>
          OUR
          <br /> PROGRAMMES
        </h2>
        <div id='calenderImage'></div>
      </div>
      <div id='programmesSection'>
        <div id='selectionNavBar'>
          <div
            id='current'
            className='programSelection'
            onClick={() => {
              ChangeProgrammeSort('Current');
            }}
            style={{ background: colorSwitch.currentColor }}
          >
            CURRENT PROGRAMS
          </div>
          <div
            id='past'
            className='programSelection'
            onClick={() => {
              ChangeProgrammeSort('Past');
            }}
            style={{ background: colorSwitch.pastColor }}
          >
            PAST PROGRAMS
          </div>
        </div>

        <div id='AvailiableProgrammes'>
          <div className='current' style={pastStyle}>
            <PastProgrammes />
          </div>

          <div className='past' style={currentStyle}>
            <CurrentProgrammes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
