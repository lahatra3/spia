import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import CardPenatibus from '../Components/CardPenatibus/CardPenatibus';
import Interdum from '../Components/Interdum/Interdum';
import Footer from '../Components/Footer/Footer';
import Advertissement from '../Components/Advertisement/Advertissement';
import { PropsMode } from '../Type/Type';

function Propos(props: PropsMode) {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-28 my-44 md:my-20">
      <CardPenatibus />
      <Interdum />
      <div className="lg:w-[868px] h-auto flex flex-col place-content-center items-center gap-14">
        <div className="w-full flex flex-col items-center gap-7">
          <h2 className="font-bold lg:text-6xl text-4xl leading-tight">Contactez-nous </h2>
          <p className="lg:text-lg text-base text-center leading-7 text-gray-400">
          Envoyez-nous un message et nous vous répondrons via réalité augmentée dans les plus brefs délais.
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-6 bg-black-rgba backdrop-blur-3xl rounded-3xl lg:px-20 lg:py-16 p-6">
          <div className="w-full flex lg:flex-rox flex-col justify-normal items-strart gap-6">
            
            
          </div>
          <div className="w-full flex flex-col items-strart gap-2">
            <h4 className="font-bold text-base leading-tight text-white">
              Votre email
            </h4>
            <input
              className="w-full h-[56px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-6"
              name="myInput"
            />
          </div>
          
          <div className="w-full flex flex-col items-strart gap-2">
            <h4 className="font-bold text-base leading-tight text-white">
              Laissez-nous un message
            </h4>
            <textarea
              className="w-full h-[200px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-10"
              name="myInput"
            />
          </div>
          <button className="w-full font-light text-s text-left flex justify-center items-start gap-3">
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: '#ffffff' }}
            />
            J&apos;accepte les conditions d&apos;utilisation Rassurez-vous, nous
            ne partagerons jamais vos informations personnelles.
          </button>
          <button className="py-3 px-10 rounded-xl bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-lg w-full">
            Envoyer
          </button>
        </div>
      </div>
      <Advertissement/>
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Propos;
