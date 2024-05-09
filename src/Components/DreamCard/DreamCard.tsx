import React from 'react'
import { PropsDream } from '../../Type/Type'

function DreamCard(props:PropsDream) {
  return (
    <div className="w-full h-auto rounded-xl bg-black-rgba backdrop-blur-3xl border-2 border-[#3D3D3D] px-10 pt-14 pb-10 flex flex-col items-start gap-20">
      <div className="w-full h-auto flex flex-col items-start gap-10">
        <div className='flex justify-normal items-center gap-2'>
          <img src='images/idea.png' className="" alt="logo" />
          <h4 className='font-bold text-base leading-tight text-gray-400 uppercase'>
            {props.titre}
          </h4>
        </div>
        <p className='text-lg leading-7 text-gray-400'>
          {props.description}
        </p>
      </div>
      <div className='flex justify-normal items-center gap-6'>
        <img src='images/dream_catcher.png' className="w-[80px] h-[80px]" alt="logo" />
        <div className="w-full h-auto flex flex-col items-start gap-2">
          <h4 className='font-bold text-base leading-tight text-gray-400 uppercase'>
            {props.sous_titre1}
          </h4>
          <p className='text-lg leading-7 text-gray-400'>
            {props.sous_titre2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DreamCard