import React from 'react'; 
import '../Scss/Main.scss';
import logo from '../Assets/logo.png';
import playicon from '../Assets/playIcon.png';
import { Link } from 'react-router-dom';

const Main = (props) => {

  const Header = () => {
    return ( 
      <header>
        <img 
          src={logo}
        />
        <h3>MENU</h3>
      </header>
    )
  }

  const Footer = () => {
    return ( 
      <footer>
        <div id='programs'>
          <div>
            <span>Matthew 18:20</span>
            <p>
            For where two or three gather in my name, there am I with them."
            </p>
          </div>
        </div>
        <Link to='programs'>
          <div>
            <img src={playicon} />
            <p>See Our Programs</p>
          </div>
        </Link>
      </footer>
    )
  }

  return ( 
    <div id='mainpage'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Main;