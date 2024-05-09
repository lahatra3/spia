import React from 'react';
import TemoignageCard from './TemoignageCard';
import Separateur from '../Separateur';

export default function Temoignage() {
  return (
    // <div className="w-full h-auto flex flex-col justify-center items-center">
    <>
      <div className="w-full  flex flex-col items-center gap-14 mt-4">
        <div className="w-full flex flex-col items-center gap-3 ">
          <h4 className="font-bold lg:text-base text-sm text-center leading-tight text-gray-400 uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]">
            Alita
          </h4>
          <h2 className="font-bold lg:text-6xl text-4xl text-center leading-tight title_color_mode_white">
            Témoignages
          </h2>
        </div>
        <div
          className="grid grid-cols-1 xl:grid-cols-3 xl:gap-10 gap-6 py-12 "
          id="cards"
        >
          <TemoignageCard
            name={'Ancien Propriétaire d&apos;Alita - Dr. Dyson Ido'}
            poste={'Chercheur et Médecin Cybernétique'}
            image={'user2.png'}
          >
          Alita, avec sa détermination et son courage, a démontré qu&apos;elle est bien plus qu&apos;une simple IA. 
          Elle a une âme et une force incroyables qui la rendent unique.
          </TemoignageCard>
          <TemoignageCard
            name={'Agent du S.P.I.A - Sofia Ramirez'}
            poste={'Responsable des Soins et de la Réhabilitation des Angels'}
            image={'joelle.png'}
          >
            Alita a été une source d&apos;inspiration pour nous tous au S.P.I.A. Sa capacité à surmonter 
            les défis et à s&apos;adapter à son nouvel environnement nous a montré à quel point les Angels peuvent être résilients.
          </TemoignageCard>
          <TemoignageCard
            name={'Agent du S.P.I.A - Marcus Johnson'}
            poste={'Agent de Sécurité et de Formation'}
            image={'user3.png'}
          >
            En tant qu&apos;agent chargé de la formation des nouveaux Angels, j&apos;ai été impressionné par la rapidité avec laquelle Alita a appris et maîtrisé de nouvelles compétences. 
            Son dévouement à sa propre croissance et à celle des autres est admirable.
          </TemoignageCard>
        </div>
      </div>
      <div className="w-full max-xl:hidden flex justify-center items-center gap-2">
        <div className="w-10 h-1 bg-white rounded bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
      </div>
    </>

    // </div>
  );
}
