import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function GeneralInfo() {
  const [w, ww] = useState(0);
  const [playMe, setPlayMe] = useState(false);

  useEffect(() => {
    ww(window.innerWidth);
  }, []);

  const playVideo = () => {
    setPlayMe(true)
    document.querySelector('.button__container').style.display = 'none'
    }

  return (
    <div className='generalInfo__container'>
      <div className='generalInfo__wrapper'>
        <div className='generalInfo__box'>
          <h3 className='main__one'>O co chodzi</h3>
          <h2 className='main__two'>MISJA</h2>
          <p>
            Zbadalismy potrzeby, dostosowalismy strukture, przygotowalismy
            element strony tak, by spelnialy wszystkie normy ustalone w{' '}
            <span className='blueDarkColorClass'>2021 </span> roku przez{' '}
            <span className='blueDarkColorClass'>Google</span>.
            <br />
            <br />
            Naszym celem jest sprawic by Panstwa firma wskoczyla do <span className='blueDarkColorClass'>TOP</span> najlepszych firm w miescie.
          </p>
        </div>
      </div>

      <div className='video__container'>
        <div className='button__container'>
          <span className='buttonPLAY buttonBlue' onClick={() => playVideo()}>
            Nacisnij
          </span>
        </div>

        {w > 0 && w < 768 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='100%'
            height='100%'
            playing={playMe}
          />
        )}

        {w >= 768 && w < 1024 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='80%'
            height='80%'
            playing={playMe}
          />
        )}

        {w >= 1024 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='60%'
            height='60%'
            playing={playMe}
          />
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
