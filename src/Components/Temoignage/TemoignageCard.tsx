import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function TemoignageCard({
  domId = 'Card',
  image,
  name = 'Nom Prenoms',
  poste,
  children = 'Temoignage',
}: any) {
  return (
    <main className=" card font-gotham-medium px-9 py-16 rounded-xl bg-[#20202097] cursor-pointer w-full sm:w-[432px] flex flex-col items-center justify-center gap-10 card">
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + image}
        alt="Card_image"
        className="rounded-full w-22 h-22"
      />
      <div className="flex flex-col items-center gap-3  ">
        <span className="font-gotham-medium xl:text-2xl sm:text-base xl:font-medium text-white title_color_mode_white">
          {name}
        </span>
        {<span className="text-sm text-gray-400">{poste}</span>}
      </div>
      <span className="font-gotham-light text-lg font-normal text-description-white text-center">
        {children}
      </span>
    </main>
  );
}
