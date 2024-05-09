import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

type Props = {
  subtitle?: string;
  title?: string;
  children?: string;
  buttonTitle?: string;
  buttonIcon?: {
    icon: any;
    color: string;
  };
  image?: string;
  id: number;
};

export default function DetailsCard({
  subtitle = 'subtitle',
  title = 'Title',
  children = 'Description',
  buttonTitle = 'Button',
  buttonIcon = {
    icon: faArrowRightLong,
    color: '#ffffff',
  },
  image = 'img3.png',
  id,
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        id % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } justify-between items-center w-full gap-14  py-12   `}
    >
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + image}
        className="sm:w-full lg:w-1/2"
        alt="logo"
      />

      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold text-base leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
            {subtitle}
          </h4>
          <h2 className="font-bold text-4xl leading-tight">{title}</h2>
        </div>
        <p className="text-base leading-7 text-gray-400">{children}</p>
        <button className="font-bold text-lg flex justify-normal items-center gap-4">
          {buttonTitle}
          <FontAwesomeIcon
            icon={buttonIcon.icon}
            style={{ color: buttonIcon.color }}
          />
        </button>
      </div>
    </div>
  );
}
