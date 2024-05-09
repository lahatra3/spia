import React from 'react';
import Accueil from '../Components/Accueil/Accueil';
import Nunc from '../Components/Nunc/Nunc';
import Penatibus from '../Components/Penatibus/Penatibus';
import Footer from '../Components/Footer/Footer';
import ExPromptCard from '../Components/CardPenatibus/ExPromptCard';
import Advertissement from '../Components/Advertisement/Advertissement';
import { PropsMode } from '../Type/Type';

function Home(props: PropsMode) {
  return (
    <div>
      <Accueil />
      <Advertissement />
      <ExPromptCard/>
      <Penatibus />
      <Nunc/>
      <br />
      <br />
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Home;
