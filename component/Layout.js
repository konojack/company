import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Intro from './Intro';
import Grid from './Grid';
import { Player } from 'video-react';
import Video from '../component/Video'

function Layout({ children }) {
  const [showVideo, setShowVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoPlayer = useRef(null);

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
        {/* <Video /> */}
      <Navbar />
      <div className='layout__wrapper'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
