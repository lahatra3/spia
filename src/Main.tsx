import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import React from 'react';
import Propos from './Pages/Propos';
import { PropsMode } from './Type/Type';
import Aibooks from './Pages/Aibooks';
import Profil from './Pages/Profil';

const Main = (props: PropsMode) => {
  return (
    <Routes>
      <Route path="/" element={<Home modeWhite={props.modeWhite} />} />
      <Route path="/ai-books" element={<Aibooks modeWhite={props.modeWhite}/>} />
      <Route path="/propos" element={<Propos modeWhite={props.modeWhite}/>} />
      <Route path="/profil" element={<Profil/>} />
    </Routes>
  );
};
export default Main;
