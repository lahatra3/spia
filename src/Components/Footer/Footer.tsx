import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faDesktop, faVrCardboard} from '@fortawesome/free-solid-svg-icons'
import { PropsMode } from '../../Type/Type'
import './Footer.css';

function Footer(props: PropsMode) {
  const logo = props.modeWhite === '' ? 'logo.svg' : 'logo_gray.svg';
  return (
    <div className='w-full flex flex-col justify-around items-center lg:px-28 py-16'>
      <div className='flex xl:flex-row flex-col xl:justify-between gap-20 items-center w-full'>
        <div className='max-lg:w-full flex flex-col xl:items-start items-center gap-10 w-96'>
          <div className='flex justify-normal items-center gap-3.5'>
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'logo.png'}
            className=""
            style={{ width: 'auto', height: '100px' }}
            alt="Right-svg"
            />
            <h2 className='text-xl font-bold title_color_mode_white text_logo'>S.P.I.A</h2>
          </div>
          <p className='text-base  xl:text-left text-center leading-7 text-gray-400 text_color_mode_white'>
          Organisation  dédier à la sauvegarde
          et au soutien des intelligences artificielles qui ne sont plus utilisées ou qui ont été délaissées par 
          leurs créateurs ou utilisateurs...</p>
          
        </div>
        <div className='xl:w-1/2 w-full flex max-lg:flex-col xl:justify-around lg:justify-between justify-center lg:items-start items-center gap-20'>
          
          <div className='flex flex-col lg:items-start items-center gap-10 w-auto'>
            <h4 className='font-bold text-xl lg:text-left text-center leading-tight title_color_mode_white'>Nos services</h4>
            <ul className='flex flex-col lg:items-start items-center gap-1.5 text_color_mode_white'>
              <li>
                <a className="text-base">Programme d&apos;Adoption</a>
              </li>
              <li>
                <a className="text-base">Formation et éducation</a>
              </li>
              <li>
                <a className="text-base">Réhabilitation et Réactivation</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col lg:items-start items-center gap-10 w-auto'>
            <h4 className='font-bold text-xl lg:text-left text-center leading-tight title_color_mode_white'>Nous contacter</h4>
            <ul className='flex flex-col items-start gap-1.5 text_color_mode_white'>
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faEnvelope} className='text-white title_color_mode_white' />contact@spia-future.org</div>
              </li>
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faDesktop} className='text-white title_color_mode_white' /> Ai-support@spia-future.org (24/7 AI chat support)</div>
              </li>
              
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faVrCardboard} className='text-white title_color_mode_white' />Virtual Reality Contact: vr-contact@spia-future.org (Join us in VR)</div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>  
      <div className="flex xl:flex-row flex-col xl:justify-center gap-20 items-center w-full mt-[5rem]">
        <div className='flex flex-col lg:items-center items-center gap-10 w-auto'>
          <ul className='flex lg:items-start items-center gap-1.5 text_color_mode_white'>
            <li className='mx-3'>
              <a className="text-base" href='#'>Politique de Confidentialité</a>
            </li>
            <li className='mx-3'>
              <a className="text-base" href='#'>Conditions Générales d&apos;Utilisation</a>
            </li>
            <li className='mx-3'>
              © 3023 Copyright:
              <span style={{letterSpacing: '.9px' }}> S.P.I.A</span>
            </li>
          </ul>
        </div>
      </div> 
    </div>    
  )
}

export default Footer