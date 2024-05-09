import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Main';
import MovingBackground from './Components/Movingbackground';

function App() {
  const [modeWhite, setModeWhite] = useState<string>('');
  return (
    <div className={modeWhite}>
      <canvas id="canvas" className="fixed bg-transparent"></canvas>
      <MovingBackground />

      <body className="w-full h-auto lg:px-20 px-10 bg-transparent dark:bg-slate-300 ">
        <div className="overflow-hidden bg-transparent text-white font-sans">
          <Header setModeWhite={setModeWhite} modeWhite={modeWhite}/>
          <div>
            <Main modeWhite={modeWhite}/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
