import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logoBonitaLovelyw.png';
import vector from '../../assets/img/vector.svg'
import { AiFillHeart } from 'react-icons/ai';
import {AiFillShopping} from 'react-icons/ai'
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';
import LoginButton from '../LoginComponents/Login';
import Profile from '../LoginComponents/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ initialLanguage }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState(initialLanguage || 'en');

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageMenu(false);
  };

  const showCategories = () => {
    setIsOpen(true);
  };
  const hideCategories = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={style.nav}>
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className={style.logo} />
          </Link>

          <div className={style.searchBar}>
            <SearchBar />
          </div>

          <div className={style.icons}>
            <button className={style.btnb}>
              <AiFillShopping />
            </button>
            <button className={style.btnb}>
              <AiFillHeart />
            </button>
            <div className={style.menuItem}>
              <Profile />
              <LoginButton />
              {isAuthenticated && <p className={style.userName}>{user.name}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ml-10">
          <div className="flex items-center">
            <h2>Categorias</h2>
            <FiChevronDown />
            {isOpen && (
              <div
                onMouseEnter={showCategories}
                onMouseLeave={hideCategories}
                className="absolute top-12 right-4 z-20 w-48 bg-white border rounded-md shadow-lg pt-20 mt-9"
              >
                <a
                  href="#perfil"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Maquillaje
                </a>
                <a
                  href="#compras"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  SkinCare
                </a>
                <a
                  href="#carrito"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Accesorios
                </a>
              </div>
            )}
          </div>

          <div className={`${style.categoriesMenu}`}>
            <ul className={`${style.menu} ${showMenu ? style.show : ''}`}>
              <li>
                <NavLink
                  to="/"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={`${style.menuItem} ${style.itemHome}`}
                >
                  {initialLanguage === 'en' ? 'Home' : 'Inicio'}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/AboutUs"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={`${style.menuItem} ${style.itemAbout}`}
                >
                  {initialLanguage === 'en' ? 'About Us' : 'Nosotros'}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={style.menuItem}
                >
                  {initialLanguage === 'en' ? 'Contact Us' : 'Contacto'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalogo"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={style.menuItem}
                >
                  {initialLanguage === 'en' ? 'Catalogo' : 'Catalogo'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={style.menuItem}
                >
                  {initialLanguage === 'en' ? 'FAQs' : 'FAQs'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/devTeam"
                  lang={initialLanguage === 'en' ? 'en' : 'es'}
                  className={style.menuItem}
                >
                  {initialLanguage === 'en' ? 'devTeam' : 'DevTeam'}
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to="#" className='ml-40'>
            Crear cuenta
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;