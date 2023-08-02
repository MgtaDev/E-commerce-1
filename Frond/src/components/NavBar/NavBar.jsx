
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logoBonitaLovelyw.png';
import bagIcon from '../../assets/img/baghandle.svg'
import bellIcon from '../../assets/img/-icon-bell.svg';
import vector from '../../assets/img/vector.svg';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';

const Navbar = ({ initialLanguage }) => {
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

  return (
    <>
     
      <nav className={style.nav}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={style.logo} />
        </Link>

      

        <ul className={`${style.menu} ${showMenu ? style.show : ''}`}>
          <li>
            <NavLink to="/" lang={initialLanguage === 'en' ? 'en' : 'es'} 
            className={`${style.menuItem} ${style.itemHome}`}>
              {initialLanguage === 'en' ? 'Home' : 'Inicio'}
            </NavLink>
          </li>

          <li>
            <NavLink to="/AboutUs" lang={initialLanguage === 'en' ? 'en' : 'es'}  
            className={`${style.menuItem} ${style.itemAbout}`}>
              {initialLanguage === 'en' ? 'About Us' : 'Nosotros'}
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" lang={initialLanguage === 'en' ? 'en' : 'es'} 
            className={style.menuItem}>
              {initialLanguage === 'en' ? 'Contact Us' : 'Contacto'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" lang={initialLanguage === 'en' ? 'en' : 'es'} 
            className={style.menuItem}>
              {initialLanguage === 'en' ? 'Catalogo' : 'Catalogo'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" lang={initialLanguage === 'en' ? 'en' : 'es'} 
            className={style.menuItem}>
              {initialLanguage === 'en' ? 'FAQs' : 'FAQs'}
            </NavLink>
          </li>
        </ul>

        <div className={style.searchBar}>
        <SearchBar/>
        </div>


        <div className={style.icons}>
          <button className={style.btnb}><img src={bagIcon} alt="bag icon" /></button>
          <button className={style.btnb}><img src={bellIcon} alt="bell icon" /></button>
  
          <img className={style.vector} alt="" src={vector} />
          <NavLink to="" lang={initialLanguage === 'en' ? 'en' : 'es'} 
          className={`${style.menuItem} ${style.login}`}>
           {initialLanguage === 'en' ? 'Login/SignUp' : 'Ingresar / Crear cuenta'}
           </NavLink>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
