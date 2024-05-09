import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IAibooks, PropsMode, ThemesData } from '../Type/Type';
import { getThemes } from '../Query/Theme.query';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import './styles/Aibooks.css';
import { aibooksData } from '../data/aibooks';

function Aibooks(props: PropsMode) {
  const bw = useRef<HTMLDivElement>(document.querySelector("div"));
  const inp = useRef<HTMLDivElement>(document.querySelector("div"));

  const navigate = useNavigate();

  const navigateTo = (route: string) => { 
    navigate(route);
  }

  const handleInputAnimation = () => {
    bw.current!.style.transform = 'rotate(-2deg)';
    inp.current!.style.transform = 'rotate(2deg)';
  };
  const handleInputAnimationOut = () => {
    bw.current!.style.transform = 'rotate(0deg)';
    inp.current!.style.transform = 'rotate(0deg)';
  };
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      handleThemes();
    }

    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const [themesList, setThemesList] = useState<null | ThemesData>(null);
  const handleThemes = async () => {
    const themes = await getThemes('fr');
    setThemesList(themes);
  };
  useEffect(() => {
    handleThemes();
  }, []);

  const [search, setSearch] = useState<string | null>();
  function scrolltoId(id: any) {
    const access = document.getElementById(id);
    access?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSearch = () => {
    if (search && themesList) {
      console.log('search :', search);
      const resultSeach = themesList.items.filter((items) =>
        items.name.toLowerCase().includes(search)
      );
      if (resultSeach.length > 0) {
        console.log('resultSeach :', resultSeach);
        setThemesList({ ...themesList, items: resultSeach });
      }
    }

    scrolltoId('cards');
  };

  const [aibooksList, setIabooks] = useState<IAibooks[]>([]);
  useEffect(() => {
    setIabooks(aibooksData)
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center" id="cards">
      <div className="lg:w-[868px] w-full h-auto my-48 flex flex-col place-content-center items-center gap-14 relative">
        <div className="w-full flex flex-col items-center gap-7 z-10">
          <h4 className="font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase"></h4>
          <h2 className="font-bold lg:text-6xl text-4xl 
            lg:text-left text-center leading-tight">Annuaires</h2>
        </div>
        <div className="w-full flex-none order-1 grow-0 relative z-10 first_part">
          <div
            className="w-[868px] h-[64px] max-lg:hidden rounded-[34px] border-2 border-white box-border "
            ref={bw}
          ></div>
          <div
            className="w-full h-auto flex items-center gap-6 rounded-[40px] border-2 py-1 pr-1 pl-10 absolute top-0 left-0 container_search"
            ref={inp}
          >
            <input
              className="placeholder:text-base placeholder:text-slate-400 w-full bg-transparent outline-none text-base text-black"
              placeholder="Faites une recherche"
              name="myInput"
              onFocus={() => handleInputAnimation()}
              onBlur={() => handleInputAnimationOut()}
              onKeyDown={(event) => handleChange(event)}
            />
            <button
              className="py-3 px-7 rounded-[34px] bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-lg"
              onClick={() => handleSearch()}
            >
              Rechercher
            </button>
          </div>
        </div>
        <img
          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'bg_theme.svg'}
          className="absolute inset-x-0 bottom-52 w-full h-auto max-xl:hidden"
          alt="Right-svg"
        />
      </div>
      {/* <Advertissement/> */}
      <div className="w-full h-auto flex flex-col justify-center items-center gap-28 py-20">


        <div className="w-full flex justify-between items-center">
          <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-20">
            <div className="lg:w-2/5 w-full flex flex-col lg:items-strart items-center lg:gap-20 gap-6">
              <div className="w-full flex flex-col lg:items-start items-center gap-2">
                <h4 className="font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
                  Catégories
                </h4>
                <h2 className="font-bold lg:text-5xl text-3xl lg:text-left text-center leading-tight w-full">
                  Découvrez les catégories des I.A existantes
                </h2>
              </div>
              <p className="lg:text-base text-sm lg:text-left text-center leading-7 text-gray-400">
                Les I.A sont sont classifiées selon leur rôle respective...
              </p>
            </div>

            <div className="w-full flex flex-col items-strart gap-10">
              <div className="w-full container_cards">
                <div className="cards">
                  <div className="w-[25rem] h-[17rem] rounded-[.7rem] card first">
                    <div className="max-w h-full overflow-hidden shadow-lg">
                      <img className="w-full" src="images/aibooks/category_domestique.jpeg" alt="Domestiques I.A" />
                      <div className="card_details">
                        <div className="card_details_button px-3 py-2 rounded-full 
                          bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] text-md">Domestiques...</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25rem] h-[17rem] rounded-[.7rem] card second">
                    <div className="max-w h-full overflow-hidden shadow-lg">
                      <img className="w-full" src="images/aibooks/category_militaire.jpeg" alt="Militairy I.A" />
                      <div className="card_details">
                        <div className="card_details_button px-3 py-2 rounded-full 
                          bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] text-md">Militaires...</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25rem] h-[17rem] rounded-[.7rem] card third">
                    <div className="max-w h-full overflow-hidden shadow-lg">
                      <img className="w-full" src="images/aibooks/category_bricoleuse.jpeg" alt="Maker I.A" />
                    </div>
                    <div className="card_details">
                      <div className="card_details_button px-3 py-2 rounded-full 
                        bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] text-md">Bricoleuses...</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="w-full h-auto flex flex-col items-start gap-10">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-bold md:text-3xl text-2xl leading-tight">
              Annuaires des I.A
            </h2>
          </div>
          <div className="grid-cols-1 sm:grid md:grid-cols-4 list_cards">
            {aibooksList.map((item, index) => (
              <div
              key={index}
                className="mx-3 mt-6 flex flex-col rounded-lg bg-white 
                text-surface shadow-secondary-1 dark:bg-surface-dark 
                dark:text-white sm:shrink-0 sm:grow sm:basis-0 card" onClick={() => navigateTo("/profil")}>
                  <div className="description">
                    <div className="font-bold text-lg m-1 text-center 
                      font-bold leading-tight text-transparent 
                      bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]">{item.label}</div>
                    <p className="mx-4 my-3 z-40">
                      {item.description}
                    </p>
                    <div className="container_btn_see_more text-right mx-2 mt-5 mb-2">
                      <Link to="/profil">
                        <button className='px-3 py-1 z-50 rounded-[34px] bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]'>
                          Voir plus...
                        </button>
                      </Link>
                    </div>
                  </div>
                <div className="cover">
                  <img
                    className="object-cover h-full w-full"
                    src={item.img}
                    alt="Hollywood Sign on The Hill" />
                </div>
              </div>
            ))}
            <button className="font-bold text-s flex justify-center items-center gap-2" style={{fontSize: '1.1rem'}}>
              Voir plus
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
        </div>
      </div>
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Aibooks;
