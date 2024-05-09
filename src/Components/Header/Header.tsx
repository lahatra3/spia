import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Profile from './Profile';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useGoogleLogin } from '@react-oauth/google';
import { CredentialUser, PropsHeader } from '../../Type/Type';
import { googleLogout } from '@react-oauth/google';
import { getUserInfo } from '../../Query/UserInfo.query';
import { UserInfo } from '../../Type/Type';
import { insertUser } from '../../Mutation/insertUser.mutation';
import { getUser } from '../../Query/GetUser.query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header(props: PropsHeader) {
  const [cardMenue, setCardMenue] = useState<string>('card_menue');
  const [screenSize, setScreenSize] = useState(0);
  const [userConfidential, setUserConfidential] =
    useState<CredentialUser | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleWhiteMode = () => {
    props.setModeWhite(props.modeWhite === 'dark' ? '' : 'dark');
  }

  const verifLogin = async () => {
    const storedtokenResponseWeb = localStorage.getItem('tokenResponseWeb');
    const access_tokenWeb = localStorage.getItem('access_tokenWeb');
    if (storedtokenResponseWeb && access_tokenWeb) {
      setUserConfidential({
        isConnected: true,
        tokenResponse: storedtokenResponseWeb,
        access_token: access_tokenWeb,
      });
      const userInfoData = await getUserInfo(access_tokenWeb);
      setUserInfo(userInfoData);
    }
  };

  const handleClickMenue = () => {
    setCardMenue(cardMenue === 'card_menue' ? 'card_menue_hidden' : 'card_menue');
    console.log('card_menue :', cardMenue);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    verifLogin();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize > 768) {
      setCardMenue('card_menue');
    }
    else  {
      setCardMenue('card_menue_hidden');
    }
  }, [screenSize]);
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse: any) => {
      setUserConfidential({
        isConnected: true,
        tokenResponse: tokenResponse,
        access_token: tokenResponse.access_token,
      });
      localStorage.setItem('tokenResponseWeb', tokenResponse);
      localStorage.setItem('access_tokenWeb', tokenResponse.access_token);
      const userInfoData = await getUserInfo(tokenResponse.access_token);
      setUserInfo(userInfoData);
      const userData = await getUser(userInfoData.id);
      if (userData.totalItems === 0) {
        insertUser(userInfoData);
      }
    },
  });

  const logout = () => {
    setUserConfidential(null);
    localStorage.removeItem('tokenResponseWeb');
    localStorage.removeItem('access_tokenWeb');
    googleLogout();
  };
  const logo = props.modeWhite === '' ? 'logo.svg' : 'logo_gray.svg';
  return (
    <header className="w-full relative pt-4 md:py-10 flex justify-between items-center lg:px-20">
        <Link to="/" className="flex justify-normal items-center gap-3.5">
          <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'logo.png '}
            className=""
            style={{ width: 'auto', height: '150px' }}
            alt="Right-svg"
          />
          <h2 className="text-xl font-bold dark:text-gray-800 text_logo">S.P.I.A</h2>
        </Link>
        <>
          <ul className={cardMenue}>
            <li className='dark:text-gray-800'>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className='dark:text-gray-800'>
              <NavLink
                to="/ai-books"
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                Annuaires
              </NavLink>
            </li>
            <li className='dark:text-gray-800'>
              <NavLink
                to="/propos"
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </>
      <div className="flex items-center gap-4">
      {userConfidential && userConfidential.isConnected ? (
        <>
        <NavLink to="/" className="hidden md:block font-bold">
            {userInfo?.given_name ?? userInfo?.family_name}
          </NavLink>
          <Profile
            user={userInfo?.picture}
            isConnected={userConfidential.isConnected}
            size={50}
          />
          <AiOutlineMenu className="w-5 h-5 md:w-8 md:h-8 inline-block cursor-pointer" onClick={() => handleClickMenue()}/>
          <FiLogOut className="w-5 h-5 md:w-8 md:h-8 cursor-pointer" onClick={() => logout()} />
        </>
      ) : (
        <>
          <div className='inline-block md:hidden cursor-pointer'>
              <AiOutlineMenu className="w-5 h-5 " onClick={() => handleClickMenue()}/>
            </div>
            <button
              onClick={() => login()}
              className="font-bold text-lg flex justify-normal items-center gap-2"
            >
              <p className='hidden md:block whitespace-nowrap dark:text-gray-800'>Se connecter</p>
              <FontAwesomeIcon  icon={faArrowRightToBracket} style={{color: props.modeWhite === '' ? "#ffffff" : '#555B61',}} className='md:hidden' />
          </button>
        </>
          

      )}
      <div onClick={() => handleWhiteMode()}>
        {
          props.modeWhite === '' ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#555B61" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        }
      </div>
      </div>
    </header>
  );
}

export default Header;