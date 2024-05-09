import { useEffect } from 'react';
import React from 'react';

type Props = {
  domId: string;
  filterId: string;
};

export default function SvgFilters({ domId, filterId }: Props) {
  useEffect(() => {
    if (document.getElementById(domId) !== null) {
      document
        .getElementById(domId)
        ?.style.setProperty('filter', `url(#${filterId})`);
    }
  }, [domId, filterId]);

  return (
    <svg style={{ display: 'none' }}>
      <defs>
        <filter id={filterId}>
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="50"
            type="fractalNoise"
            result="static"
          >
            <animate
              attributeName="seed"
              values="0;100"
              dur="900ms"
              repeatCount="1"
              begin={`${domId}.mouseenter`}
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur="900ms"
              repeatCount="1"
              begin={`${domId}.mouseenter`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
