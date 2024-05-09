'use client';

import { useEffect, useRef } from 'react';
import React from 'react';


export default function MovingBackground() {
  const round1 = useRef(null);
  const round2 = useRef(null);
  const round3 = useRef(null);
  const round4 = useRef(null);
  const round5 = useRef(null);
  const round6 = useRef(null);
  const rounds = [round1, round2, round3, round4, round5, round6];

  const speed = 20000;
  const frameScale = 1;

  const randomPlace = (reference, elementSize) => {
    return (
      Math.floor(Math.random() * (reference * frameScale)) - elementSize / 2
    );
  };

  const animateCircles = (round, duration) => {
    let element = round.current.getBoundingClientRect();
    let x = Math.floor(element.x);
    let y = Math.floor(element.y);

    let MoveAnimation = [
      { transform: `translate(${x}px, ${y}px)` },
      {
        transform: `translate(${randomPlace(
          window.innerWidth,
          element.width
        )}px, ${randomPlace(window.innerHeight, element.height)}px)`,
      },
    ];

    round.current.animate(MoveAnimation, {
      duration: duration,
      iterations: 1,
      easing: 'ease-in-out',
      fill: 'forwards',
    });
  };

  useEffect(() => {
    import('../utils/CursorFluid');
    import('../utils/CardEffect');

    for (let round of rounds) {
      let element = round.current.getBoundingClientRect();
      round.current.style.opacity = 0.3;
      round.current.style.transform = `translate(${randomPlace(
        window.innerWidth,
        element.width
      )}px, ${randomPlace(window.innerHeight, element.height)}px)`;
      let duration = (Math.random() + 1) * speed;

      animateCircles(round, duration);
      const interval = setInterval(() => {
        animateCircles(round, duration);
      }, duration);

      () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div className="fixed bg-black z-40">
        <div className="fixed">
          <div
            ref={round1}
            id="bgRound1"
            className="bg-[#07004D] w-[200px] h-[200px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
          <div
            ref={round2}
            id="bgRound2"
            className="bg-[#61285B] w-[300px] h-[300px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
          <div
            ref={round3}
            id="bgRound3"
            className="bg-[#07004D] w-[150px] h-[150px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
          <div
            ref={round4}
            id="bgRound4"
            className="bg-[#61285B] w-[250px] h-[250px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
          <div
            ref={round5}
            id="bgRound1"
            className="bg-[#07004D] w-[200px] h-[200px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
          <div
            ref={round6}
            id="bgRound1"
            className="bg-[#07004D] w-[200px] h-[200px] rounded-full absolute blur-sm"
            style={{ opacity: 0.5, transition: 'opacity 3s ease-in' }}
          ></div>
        </div>
      </div>
    </>
  );
}
