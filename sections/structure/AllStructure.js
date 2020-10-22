import React from 'react';
import {
  WelcomeStructure,
  LogoStructure,
  SerwisStructure,
  StatsStructure,
  OgolnyStructure,
  TeamStructure,
  VideoStructure,
  CertyfikatyStructure,
  PrezentacjeStructure,
  PriceStructure,
  OpinionStructure,
  GiftStructure,
  MapStructure,
  MenuStructure,
} from '../../svg/Svg';
import { data } from './data';

function AllStructure() {
  return (
    <div className='allStructure__container'>
      <div className='allStructure__wrapper'>
        <div className='allStructure__box'>
          <h3 className='main__one'>Lista</h3>
          <h2 className='main__two'>Wszystkich selekcji</h2>
          <p>Ponizej obowiazkowe i opcjonalne sekcje</p>
        </div>

        <div className='allStructure__elements'>
          {/* 1 */}
          {data.map((el) => (
            <div className='allStructure__element' key={el.img}>
              <div className='allStructure__left'>
                {el.img === 'WelcomeStructure' && <WelcomeStructure />}
                {el.img === 'LogoStructure' && <LogoStructure />}
                {el.img === 'OgolnyStructure' && <OgolnyStructure />}
                {el.img === 'StatsStructure' && <StatsStructure />}
                {el.img === 'SerwisStructure' && <SerwisStructure />}
                {el.img === 'TeamStructure' && <TeamStructure />}
                {el.img === 'VideoStructure' && <VideoStructure />}
                {el.img === 'CertyfikatyStructure' && <CertyfikatyStructure />}
                {el.img === 'PrezentacjeStructure' && <PrezentacjeStructure />}
                {el.img === 'PriceStructure' && <PriceStructure />}
                {el.img === 'OpinionStructure' && <OpinionStructure />}
                {el.img === 'GiftStructure' && <GiftStructure />}
                {el.img === 'MapStructure' && <MapStructure />}
                {el.img === 'MenuStructure' && <MenuStructure />}
              </div>
              <div className='allStructure__right'>
                <h3>{el.h3}</h3>
                <p>{el.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllStructure;
