import React from 'react';
import { general, seo, media, special, effects, recommendation } from './data';

function AllSteps() {
  return (
    <div className='allSteps__container'>
      <div className='allSteps__wrapper'>
        <div className='allSteps__box'>
          <h3 className='main__one'>Lista</h3>
          <h2 className='main__two'>Wszystkich krokow</h2>
          <p>Ponizej za i przeciw kazdej opcji</p>
        </div>
      </div>

      <div className='allSteps__info'>
        <div className='step__container'>
          {/* Info */}
          <div className='step'>
            <p>Ogolne</p>
            {general.map((el, i) => {
              return (
                <div className='steps_box' key={i}>
                  <span style={{ color: '#92f61a' }}>{i + 1}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 1}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>
          {/* End of Info */}

          {/* SEO */}
          <div className='step'>
            <p>SEO</p>
            {seo.map((el, i) => {
              return (
                <div
                  className='steps_box'
                  key={i}
                >
                  <span style={{ color: '#5626c4' }}>{i + 12}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 12}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>

          {/* media */}
          <div className='step'>
            <p>Media</p>
            {media.map((el, i) => {
              return (
                <div
                  className='steps_box'
                  key={i}
                >
                  <span style={{ color: '#ff00d4' }}>{i + 21}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 21}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>

          {/* special */}
          <div className='step'>
            <p>Specjaly</p>
            {special.map((el, i) => {
              return (
                <div
                  className='steps_box'
                  key={i}
                >
                  <span style={{ color: '#ffa600' }}>{i + 28}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 28}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>

          {/* effects */}
          <div className='step'>
            <p>Efekty</p>
            {effects.map((el, i) => {
              return (
                <div
                  className='steps_box'
                  key={i}
                >
                  <span style={{ color: '#d9ff00' }}>{i + 34}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 34}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>

          {/* recommendation */}
          <div className='step'>
            <p>Nasza Rekomendacja</p>
            {recommendation.map((el, i) => {
              return (
                <div
                  className='steps_box'
                  key={i}
                >
                  <span style={{ color: '#29f0a4' }}>{i + 59}#</span>
                  <div className='box_title'>
                    <h3>{el.title}</h3>
                    <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 59}`} />
                  </div>
                  <p>
                    <span style={{ color: '#fd2539' }}>ZLE - </span>
                    {el.bad}
                  </p>
                  <br />
                  <p>
                    <span style={{ color: '#3d8e1c' }}>Nasz serwis - </span>
                    {el.good}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSteps;
