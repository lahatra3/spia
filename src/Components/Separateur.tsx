import React from 'react';

export default function Separateur() {
  return (
    <div className="flex justify-center items-center gap-3 ">
      <hr className="border-t-2 border-red-500" />
      <div className="flex gap-2">
        <div className="rounded-full bg-white"></div>
        <div className="rounded-full bg-white"></div>
        <div className="rounded-full bg-white"></div>
      </div>
    </div>
  );
}
