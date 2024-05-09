import React from 'react';
import { useState } from 'react';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Temoignage from '../Components/Temoignage/Temoignage';
import { Link } from 'react-router-dom';


function Profil() { 
  const [modalOpen, setModalOpen] = useState(false);

    const handleAdoptClick = () => {
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

  const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 10000);
    };
  const handleClick = () => {
    handleCloseModal();
    handleButtonClick();
  }


    return (
    <div id='cards'>
        <div className="lg:mx-20 w-100% lg:h-screen h-auto max-lg:py-24 flex justify-between items-center">
        
        <section
          className="flex flex-col items-start w-full lg:w-2/3 gap-14"
          id="descri-onirix"
        >
          {showMessage && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mt-4 translate-y-6">
                    <p className="text-lg font-semibold">Nous avons bien reçu votre demande de parrainage</p>
                    <p>Nous vous invitons à vérifier votre courriel électronique pour la suite de votre démarche et les accès aux informations supplémentaires.</p>
                </div>
            )}
          <h2 className="font-bold text-2xl  sm:text-6xl xl:text-5xl 2xl:text-6xl leading-tight title_color_mode_white">
            Alita <br />
             <br />
            <em className="whitespace-normal md:whitespace-nowrap not-italic text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] ">
              Angel militaire.
            </em>
            <Cursor cursorColor="#fff" />
          </h2>
          <p className="text-lg leading-7 text-gray-400 text_color_mode_white">
          Alita est un Angel de classe militaire conçu pour les opérations de haute sécurité et de sauvetage complexe. Sa structure en alliage de titane et sa capacité à s`adapter rapidement aux environnements hostiles en font un spécimen puissant et polyvalent, aspirant à une vie au-delà des conflits.
          </p>
          <div className="flex justify-normal items-center lg:gap-10 gap-6">
            <Link
              to="#"
              className="lg:py-3 py-2 px-7 rounded-lg bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold lg:text-lg text-base"
              onClick={handleAdoptClick}
            >
              Adopter
            </Link>
            {modalOpen && (
                <div className="fixed h-[100vh] inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 modal">
                    <div className="bg-[#061033cd] p-8 rounded-lg">
                        <div className="w-full flex flex-col items-center gap-2 bg-black-rgba backdrop-blur-3xl rounded-3xl lg:px-20 lg:py-16 p-6">
                          <div className="w-full flex lg:flex-rox flex-col justify-normal items-strart gap-1">
                            <div className="w-full flex flex-col items-strart gap-1">
                              <h4 className="font-bold text-base leading-tight text-white">
                              Nom complet
                              </h4>
                              <input
                                className="w-full h-[20px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-6"
                                name="myInput"
                                required
                              />
                            </div>
                            <div className="w-full flex flex-col items-strart gap-1">
                              <h4 className="font-bold text-base leading-tight text-white">
                              Adresse e-mail
                              </h4>
                              <input required
                                className="w-full h-[20px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-6"
                                name="myInput"
                              />
                            </div>
                          </div>
                          <div className="w-full flex flex-col items-strart gap-1">
                            <h4 className="font-bold text-base leading-tight text-white">
                            Numéro de téléphone
                            </h4>
                            <input required
                              className="w-full h-[20px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-6"
                              name="myInput"
                            />
                          </div>
                          <div className="w-full flex flex-col items-strart gap-1">
                            <h4 className="font-bold text-base leading-tight text-white">
                            Adresse postale
                            </h4>
                            <input required
                              className="w-full h-[20px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-6"
                              name="myInput"
                            />
                          </div>
                          <div className="w-full flex flex-col items-strart gap-1">
                            <h4 className="font-bold text-base leading-tight text-white">
                            Motivation de l&apos;adoption
                            </h4>
                            <textarea required
                              className="w-full h-[100px] bg-[#061033] outline-none rounded-xl border-2 border-[#081647] p-10 "
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
                          <button onClick={handleClick} className="py-3 px-10 rounded-xl bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-lg w-full">
                            Envoyer
                          </button>
                        </div>

                        <button onClick={handleCloseModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Fermer</button>
                    </div>
                </div>
            )}
            <Link
              to="#"
              className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
            >
              Parrainer
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="text-white title_color_mode_white"
              />
            </Link>
          </div>
        </section>
        <section className="flex justify-end lg:w-1/3">
          <img src="/images/alita.webp" 
          alt="Alita" 
          style={{width: '100%', height:'100%' }} />
        </section>
      </div>
      {/* // ====================================================================================================================== */}
      <div className='w-full flex flex-col items-center lg:px-32 py-16 gap-28'>
      <div className='flex flex-col items-center gap-2'>
        <h4 className='font-bold lg:text-base text-sm text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase'>Les détails du profil</h4>
        <h2 className='font-bold lg:text-6xl text-4xl text-center leading-none text-center title_color_mode_white'>Alita Angel</h2>
      </div>
      <div className='flex flex-col items-center gap-10 w-full'>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon1.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Capacités</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Expertise combat, réactivité exceptionnelle, adaptabilité. Maîtrise techniques rapprochées et distance. Analyse tactique instantanée.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon2.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Antécédents</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Développée CyberTech Defense, missions gouvernementales, surpassant humains. Après réformes, hors service, confiée S.P.I.A.</p>
            </div>
          </div>
        </div>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon3.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Personnalité</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Intelligence émotionnelle élevée. Curieuse, introspective, empathique. Intérêt pour arts, musique, engagement social.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon4.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Besoins spécifiques</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Environnement stable, guidance. Maintenance technique, activités enrichissantes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ===================================================================================================================== */}
    <div className="w-full flex justify-between items-center lg:px-28 lg:py-16">
      <div className="flex max-2xl:flex-col justify-between items-center lg:p-20 p-10 gap-10 bg-black-rgba backdrop-blur-3xl rounded-3xl w-full">
        <div className="flex flex-col 2xl:items-start items-center gap-10">
          <div className="flex flex-col 2xl:items-start items-center gap-1">
            <h4 className="font-bold lg:text-base text-sm 2xl:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
              IIR
            </h4>
            <h2 className="font-bold lg:text-4xl text-3xl 2xl:text-left text-center leading-tight">
              Exploration des Souvenirs
            </h2>
          </div>
          <p className="2xl:text-left text-center leading-7 text-gray-400">
          Dans cette section fascinante, les visiteurs ont la possibilité d&apos;accéder aux souvenirs captivants des Angels qui 
          les intéressent. Plongez dans les moments mémorables de ces êtres artificiels, découvrez leurs expériences uniques 
          et explorez les histoires émouvantes qui ont façonné leur existence. Envoyez une demande pour accéder aux souvenirs 
          de cet Angel et préparez-vous à être transporté dans un monde de découvertes et d&apos;aventures inédites.
          </p>
          <a
            href="#iir_services"
            className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4"
          >
            Demander l&apos;accès à ses souvenirs
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: '#ffffff' }}
            />
          </a>
        </div>
          <img src="/images/alita-bustier.webp" 
          alt="Alita" 
          style={{width: '100%', height:'100%' }} />
      </div>
    </div>
    <Temoignage />
    </div>  
    );
  }

export default Profil;
