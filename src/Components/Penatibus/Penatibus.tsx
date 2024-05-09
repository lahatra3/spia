import React from 'react'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




function Penatibus() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo('.card', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 2, // Correction : l'opacité doit être entre 0 et 1
      y: 25,
      duration: 2,
      scrollTrigger: {
        trigger: '.card', // Correction : utilisez une chaîne de caractères pour sélectionner l'élément
        start: 'top 50%',
        end: 'bottom top',
        scrub: 1,
      }
    });
 }, []);


  return (
    <div className='w-full flex flex-col items-center lg:px-32 py-16 gap-28'>
      <div className='flex flex-col items-center gap-2'>
        <h4 className='font-bold lg:text-base text-sm text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase'>Société Protectrice des IA Abandonnées</h4>
        <h2 className='font-bold lg:text-6xl text-4xl  leading-none text-center title_color_mode_white'>Les avantages</h2>
      </div>
      <div className='flex flex-col items-center gap-10 w-full'>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className=' card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon1.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Réutilisation Responsable des Ressources</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Le site permettrait de connecter des IA négligées avec de nouveaux utilisateurs ou organisations, favorisant ainsi une utilisation responsable des ressources technologiques sans nécessiter la création de nouvelles IA, ce qui est à la fois économique et écologique.</p>
            </div>
          </div>
          <div className=' card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon2.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Formation Continue</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>En offrant aux IA la possibilité de continuer à apprendre et à évoluer, le site contribue à maintenir leur pertinence technologique et à accroître leur capacité à servir efficacement dans de nouveaux environnements ou rôles. </p>
            </div>
          </div>
        </div>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon3.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Amélioration des Capacités d&apos;IA</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Les utilisateurs peuvent bénéficier de l&apos;adoption d&apos;IA réhabilitées en accédant à des technologies avancées potentiellement sous-utilisées, ce qui peut améliorer les capacités opérationnelles sans les coûts associés à des solutions de pointe.</p>
            </div>
          </div>
          <div className=' card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon4.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Soutien et Assistance</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Le site pourrait offrir un soutien technique et des conseils pour l&apos;intégration des IA réhabilitées, aidant les utilisateurs à maximiser l&apos;efficacité de leur nouvelle acquisition technologique.</p>
            </div>
          </div>
        </div>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon5.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Promotion de l&apos;Éthique dans la Tech</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Utiliser le site de la S.P.I.A montre un engagement envers des pratiques éthiques dans l&apos;utilisation de l&apos;IA, en reconnaissant la valeur et le potentiel des technologies existantes plutôt que de contribuer à un cycle de consommation et d&apos;abandon.</p>
            </div>
          </div>
          <div className='card flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon6.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5 '>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Communauté et Collaboration </h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'> Le site peut également servir de plateforme pour une communauté d&apos;utilisateurs, de développeurs et d&apos;enthousiastes de l&apos;IA, encourageant le partage des connaissances, la collaboration sur des projets et le soutien mutuel dans les innovations technologiques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Penatibus