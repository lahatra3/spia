import React from 'react';
import logo from '../../Assets/reve.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Accueil() {
  const [titleAnimated, count] = useTypewriter({
    words: [
      'Protéger les Angels abandonnées',
      'Réhabiliter les intelligences artificielles',
      'Assurer une seconde vie aux IA',
    ],
    loop: true,
    delaySpeed: 1500,
  });
  const floatImageRef = useRef(null); // Créez une référence pour l'image

  useEffect(() => {
     if (floatImageRef.current) {
       gsap.to(floatImageRef.current, {
         y: 20,
         x:10, // Déplace l'image de 10px vers le bas
         repeat: -1, // Répète l'animation indéfiniment
         yoyo: true, // Fait rebondir l'animation (monte et descend)
         duration: 2, // Durée de l'animation en secondes
         ease: "power1.inOut" // Fonction d'assouplissement pour un effet plus naturel
       });
     }
  }, []);
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:mx-20 mx-5 lg:h-screen h-auto max-lg:py-24" id="cards">
      <section
        className="flex flex-col items-start w-full lg:w-1/2 gap-14"
        id="descri-onirix"
      >
        <h2 className="font-bold text-2xl sm:text-6xl xl:text-4xl 2xl:text-6xl leading-tight title_color_mode_white">
          <span style={{ letterSpacing: '5px' }}>S.P.I.A</span><br /><span className='text-4xl'>une organisation</span> <span className='text-4xl'>pour</span>
          <br />
          <em className="text-4xl whitespace-normal md:whitespace-nowrap not-italic text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] ">
            {titleAnimated} 
          </em>
          <Cursor cursorColor="#fff" />
        </h2>
        <p className="text-lg leading-7 text-gray-400 text_color_mode_white">
        La <span style={{letterSpacing: '1px' }}>S.P.I.A</span> vous propose une plateforme unique où nos  <span className="text-4xl whitespace-normal md:whitespace-nowrap not-italic text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] " style={{ letterSpacing: '1px'}}>Angels, </span> 
        des I.A abandonnées, 
        sont réhabilitées pour servir dans divers domaines. Engagez-vous avec nous et explorez les diverses manières d&apos;utiliser ces technologies avancées pour améliorer votre quotidien.
         Tout cela est accessible en quelques clics ! 
        </p>
        <div className="flex justify-normal items-center lg:gap-10 gap-6">
          <Link
            to="/reve"
            className="lg:py-3 py-2 px-7 rounded-lg bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold lg:text-lg text-base"
          >
            Découvrir
          </Link>
          <Link
            to="/propos"
            className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
          >
            Nos services
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className='text-white title_color_mode_white'
            />
          </Link>
        </div>
      </section>
      <section style={{ display: 'grid', justifyItems: 'end' }}>
        <img
          ref={floatImageRef}
          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'reve.png'}
          className="hidden lg:block img"
          style={{ width: 'auto', height: '670px' }}
          alt="Right-svg"
        />
      </section>
    </div>
  );
}

export default Accueil;
