import React, { Component, useState, useEffect, useRef } from 'react';
import { Player, ControlBar } from 'video-react';
import { Left } from '../svg/Svg';

function Video() {
  const [open, setOpen] = useState(false);
  const [mouse, setMouse] = useState(false);

  const videoRef = useRef(null);
  const toggleRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000)
  }, []);

  useEffect(() => {
    progressRef.current.addEventListener('click', scrub);
    progressRef.current.addEventListener('mousemove', (e) => mouse && scrub(e));
  }, [progressRef])

  const togglePlay = () => {
    const method = videoRef.current.paused ? 'play' : 'pause';
    videoRef.current[method]();
  };

  const updateButton = () => {
    const icon = videoRef.current.paused ? '►' : '❚ ❚';
    toggleRef.current.textContent = icon;
  };

  const handleProgress = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressBarRef.current.style.flexBasis = `${percent}%`;
  };

  const scrub = (e) => {
    const scrubTime =
    (e.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  const hideOrOpen = () => {
    setOpen(!open);
    videoRef.current.pause();
  };

  return (
    <div className={`interactive ${open ? 'open' : ''}`}>
      <span className='toggleVideo' onClick={() => hideOrOpen()}>
        <Left />
      </span>

      <div className='player'>
        <video
          class='player__video viewer'
          src='./video2.mp4'
          onClick={() => togglePlay()}
          onPlay={() => updateButton()}
          onPause={() => updateButton()}
          onTimeUpdate={() => handleProgress()}
          ref={videoRef}
        ></video>

        <div class='player__controls'>
          <div
            class='progress'
            // onClick={(e) => scrub(e)}
            // onMouseMove={(e) => mouse && scrub(e)}
            onMouseDown={() => setMouse(true)}
            onMouseUp={() => setMouse(false)}
            ref={progressRef}
          >
            <div class='progress__filled' ref={progressBarRef}></div>
          </div>
          <button
            class='player__button toggle'
            title='Toggle Play'
            onClick={() => togglePlay()}
            ref={toggleRef}
          >
            ►
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;





// 1. https://github.com/vivekjne/video-player-react-youtube

// 2. NORMALNY HTML INBUILT TEZ DZIALA - ale mniej ladny

// 3. TU LADNIE ALE PO DEPLOY ZLE DZIALA

// https://video-react.js.org/

// export default class Video extends Component {
//   state = {
//     showVideo: false,
//     innerWidth: 0,
//   };

//   componentDidMount() {
//     // subscribe state change
//     this.player.subscribeToStateChange(this.handleStateChange.bind(this));

//     setTimeout(() => {
//       this.setState({ showVideo: true });
//     }, 1000);

//     this.setState({ innerWidth: window.innerWidth });

//     setTimeout(() => {
//       this.play();
//     }, 1000);
//   }

//   handleStateChange = (state) => {
//     // copy player state to this component's state
//     this.setState({
//       player: state,
//     });
//   };

//   play = () => {
//     this.player.play();
//   };

//   pause = () => {
//     this.player.pause();
//   };

//   hideOrOpen = () => {
//     if (this.state.showVideo === true) {
//       this.setState({ showVideo: false });
//       this.pause();
//       // set to 0sec
//       this.player.seek(0);
//     } else {
//       this.setState({ showVideo: true });
//       setTimeout(() => {
//         this.play();
//       }, 1000);
//     }
//   };

//   render() {
//     return (
//       <div className={`interactive ${this.state.showVideo ? 'open' : ''}`}>
//         <span
//           className={`toggleVideo`}
//           onClick={() => this.hideOrOpen()}
//         >
//           <Left />
//         </span>
//         <div>
//           {this.state.innerWidth < 425 && (
//             <Player
//               ref={(player) => {
//                 this.player = player;
//               }}
//               poster='./teacher.png'
//               width={200}
//               height={113}
//               fluid={false}
//             >
//               <source src='./video.mp4' />
//               <ControlBar autoHide={false} />
//             </Player>
//           )}
//           {this.state.innerWidth >= 425 && this.state.innerWidth < 768 && (
//             <Player
//               ref={(player) => {
//                 this.player = player;
//               }}
//               poster='./teacher.png'
//               width={250}
//               height={142}
//               fluid={false}
//             >
//               <source src='./video.mp4' />
//               <ControlBar autoHide={false} />
//             </Player>
//           )}
//           {this.state.innerWidth >= 768 && this.state.innerWidth < 1024 && (
//             <Player
//               ref={(player) => {
//                 this.player = player;
//               }}
//               poster='./teacher.png'
//               width={280}
//               height={159}
//               fluid={false}
//             >
//               <source src='./video.mp4' />
//               <ControlBar autoHide={false} />
//             </Player>
//           )}
//           {this.state.innerWidth >= 1024 && (
//             <Player
//               ref={(player) => {
//                 this.player = player;
//               }}
//               poster='./teacher.png'
//               width={300}
//               height={170}
//               fluid={false}
//             >
//               <source src='./video.mp4' />
//               <ControlBar autoHide={false} />
//             </Player>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
