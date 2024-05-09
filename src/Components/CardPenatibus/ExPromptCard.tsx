import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PropsMode } from '../../Type/Type';
import AnimatedConicGradient from'../Anima/AnimatedConicGradient'

function ExPromptCard() {
  return (
    // <div className="w-full flex justify-between items-center px-28 py-16">
    <div className="flex max-lg:flex-col justify-between items-center px-11 lg:mx-20 lg:my-36 my-10 py-10 bg-black-rgba backdrop-blur-3xl rounded-3xl gap-10">
      {/* <img src="images/img2.png" className="w-1/2" alt="logo" /> */}
      <div className="bg-[#18182F] rounded-xl px-3 h-48  flex items-center justify-center lg:w-3/4 w-full text-gray-500">
        
        <AnimatedConicGradient/>
        
      </div>
      <div className="flex flex-col lg:items-start items-center gap-10 ">
        <div className="flex flex-col lg:items-start items-center gap-2">
          
          <h2 className="font-bold lg:text-4xl text-3xl lg:text-left text-center leading-tight title_color_mode_white">
            Les Angels
          </h2>
        </div>
        <div className="lg:text-left text-center text-base leading-7 text-gray-400 text_color_mode_white">
        Découvrez les catégories des I.A existantes <br />
        Les Angels sont des intelligences artificielles précédemment abandonnées que nous avons soigneusement réhabilitées et classées par catégories et utilités, afin de leur offrir une nouvelle vie où elles peuvent continuer à apprendre, 
        à grandir et à contribuer de manière significative dans divers contextes et industries.
        </div>
        <Link
          to="/ai-books"
          className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
        >
          Découvrir les Angels
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className='text-white title_color_mode_white'
          />
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default ExPromptCard;
