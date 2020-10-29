import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Intro from './Intro';
import Grid from './Grid';
import { Player } from 'video-react';
import Video from '../component/Video';
import Popup from '../component/Popup';

function Layout({ children }) {
  // const [showVideo, setShowVideo] = useState(false);
  // const [playVideo, setPlayVideo] = useState(false);
  // const videoPlayer = useRef(null);

  const [pop, setPop] = useState(false);
  const [popActiveDiv, setPopActiveDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopActiveDiv(true);
    }, 5000);
  }, []);

  const popupEvent = () => {
    if (localStorage.getItem('popup') === 'true') {
      return;
    } else {
      document.documentElement.style.overflowY = 'hidden';
      setPop(true);
    }
  };

  return (
    <div className='layout__container'>
      {/* <Grid /> */}
      {/* <Intro /> */}
      <div className='bg-fixed'></div>

      {/* <div className={`interactive ${showVideo ? 'open' : ''}`}>
        <span className='closeVideo'></span>
        <Player
          poster='./teacher.png'
          width={350}
          height={250}
          fluid={false}
          autoPlay={`${playVideo === true ? true : false}`}
          ref={videoPlayer}
        >
          <source src='./video.mp4' />
        </Player>
      </div> */}

      {children.key === '/' && <Video />}

      {pop && <Popup setPop={setPop} />}

      {/* empty div for mouse out popup */}
      {popActiveDiv && (
        <div
          style={{
            height: '1.5rem',
            width: '12rem',
            position: 'fixed',
            zIndex: '10',
          }}
          onMouseOver={() => popupEvent()}
        ></div>
      )}

      <Navbar />
      <div className='layout__wrapper'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
