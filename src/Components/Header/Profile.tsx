import React from 'react';

type Props = {
  user?: string;
  size?: number;
  isConnected?: boolean;
};

export default function Profile({
  user,
  size = 30,
  isConnected = false,
}: Props) {
  return (
    <div className="relative">
      {user && (
        <img
          className="rounded-full border-2 border-white bg-white"
          src={user}
          width={size}
          height={size}
          alt=""
        />
      )}
      {isConnected && (
        <div className="absolute rounded-full bg-green-500 w-2.5 h-2.5 border border-white right-0 bottom-0.5"></div>
      )}
    </div>
  );
}
