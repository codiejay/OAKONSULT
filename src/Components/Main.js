import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import logo from '../Assets/logo.png';
import playicon from '../Assets/playIcon.png';
import playIconForButton from '../Assets/playIcon.svg';
import { Link } from 'react-router-dom';
import Popup from '../Components/PopUp/Popup';

import '../Scss/Main.scss';

const Main = (props) => {
  const quotes = useSelector(({ common }) => common.quotes);
  //state and variables
  const [showMenu, setShowMenu] = useState(false);

  const Header = () => {
    return (
      <header>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <div>
          <h3
            onClick={() => {
              setShowMenu(true);
            }}
          >
            MENU
          </h3>
          {showMenu && (
            <div id='menuContent'>
              <p
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                close
              </p>
              <ul>
                <li>
                  <Link to='about'>
                    <h3>01</h3>
                    <p>About OAK</p>
                  </Link>
                </li>
                <li>
                  <Link to='/training-and-resourcing'>
                    <h3>02</h3>
                    <p>Training And Resources</p>
                  </Link>
                </li>
                <li>
                  <Link to='invite'>
                    <h3>03</h3>
                    <p>Invite me</p>
                  </Link>
                </li>
                <li>
                  <Link to='churches'>
                    <h3>04</h3>
                    <p>For Churces</p>
                  </Link>
                </li>
              </ul>

              <div id='social'>
                <a target='_blank' href='https://twitter.com'>
                  TWITTER
                </a>
                <a target='_blank' href='https://instagram.com'>
                  INSTAGRAM
                </a>
                <a target='_blank' href='https://youtube.com'>
                  YOUTUBE
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  const Footer = () => {
    const [email, setEmail] = useState('');
    const url =
      'https://oakonsult.us1.list-manage.com/subscribe/post?u=f514bac518d81829d3a86f8d8&amp;id=c138c64f47';
    return (
      <footer>
        <div id='programs'>
          <div id='programTitle'>
            <span>Matthew 18:20</span>
            <p>
              ...For where two or three gather in my name, there am I with
              them."
            </p>
          </div>
          <div id='programButton'>
            <Link to='programmes' id='programLink'>
              <img src={playicon} />
              <p>See Our Programs</p>
            </Link>
          </div>
        </div>

        <div id='newsletter'>
          <div id='heading'>
            <h2>can i write you a letter?</h2>
            <p>
              every week, I want to send you a letter from my heart. Something
              you can read in less than 20mins but will stay with you for longer
            </p>
          </div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => {
              const onSubmit = (e) => {
                e.preventDefault();
                subscribe({ EMAIL: email });
                status === 'success' && setEmail('');
              };
              return (
                <div>
                  <form onSubmit={onSubmit}>
                    <div>
                      <input
                        placeholder='YOUR EMAIL'
                        onChange={({ target }) => setEmail(target.value)}
                      />
                      <div id='sendButton' onClick={onSubmit}>
                        <img src={playIconForButton} />
                      </div>
                    </div>
                    {status === 'success' ? (
                      <span className='success-subscribe'>
                        Subscribed{' '}
                        <span role='img' aria-label='check'>
                          ✔
                        </span>
                      </span>
                    ) : null}
                    <p>*your email is safe with me.</p>
                  </form>
                </div>
              );
            }}
          />
        </div>

        <div id='mainFooter'>
          <div id='footerImg'></div>
          <div id='footerBoxes'>
            <div id='footerLogo'></div>

            <div className='footerBox'>
              <h3>contact</h3>
              <a href='https://hey.com'>- Send us an email</a>
              <a href='https://hey.com'>- Give us a call</a>
            </div>

            <div className='footerBox'>
              <h3>our offerings</h3>
              <a href='/carers'>- for parent carers</a>
              <a href='/churches'>- for churches</a>

              <a href='/training-and-resourcing'>- training and resources</a>
            </div>

            <div className='footerBox'>
              <h3>about OAK</h3>
              <a href='https://hey.com'>- our story</a>
              <a href='https://hey.com'>- abigail's story</a>
              <a href='/donations'>- make a donation</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div id='mainpage'>
      <Header />
      <Popup data={quotes} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;
