import Homepage from './Pages/HomePage';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
