import React from 'react';
import { general, seo, media, special, effects, recommendation } from './data';
import { Good, Bad } from '../../svg/Svg';

function AllSteps() {
  return (
    <div className='allSteps__container'>
      <div className='allSteps__wrapper'>
        <div className='allSteps__box'>
          <h2 className='main__two'>Wszystkie kroki</h2>
          <p>Ponizej za i przeciw kazdej opcji</p>
        </div>
      </div>

      <div className='allSteps__info'>
        <div className='step__container'>
          {/* Info */}
          <div className='step__wrapper'>
            <p className='step__title'>Podstawa</p>
            <div className='step'>
              {general.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 1}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 1}`} />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End of Info */}

          {/* SEO */}
          <div className='step__wrapper'>
            <p className='step__title'>SEO</p>
            <div className='step'>
              {seo.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 12}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 12}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* media */}
          <div className='step__wrapper'>
            <p className='step__title'>Media</p>
            <div className='step'>
              {media.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 21}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 21}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* special */}
          <div className='step__wrapper'>
            <p className='step__title'>Specjaly</p>
            <div className='step'>
              {special.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 28}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 28}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* effects */}
          <div className='step__wrapper'>
            <p className='step__title'>Efekty</p>
            <div className='step'>
              {effects.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 34}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 34}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* recommendation */}
          <div className='step__wrapper'>
            <p className='step__title'>Nasza Rekomendacja</p>
            <div className='step'>
              {recommendation.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 59}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 59}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSteps;
