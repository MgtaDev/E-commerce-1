import React from 'react';
import './Footer.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { faCreditCard, faMoneyCheck } from '@fontawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoBonitaLovelyw.png';
import Facebook from '../../assets/img/facebook.png';
import Twitter from '../../assets/img/gorjeo.png';
import Gmail from '../../assets/img/gmail.png';
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerColumn}>
        <div className={style.footerLogo}>
          <img src={Logo} alt="Company logo" />
          <p className="footer__logo-description">We are an online store for makeup and beauty, offering high-quality products and excellent customer service.</p>
        </div>
        <div className={style.footerSocial}>
          <a href="https://www.facebook.com/" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" width="50" height="50" /></a>
          <a href="https://www.twitter.com/" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" width="50" height="50" /></a>
          <a href="mailto:contacto@tutienda.com"><img src={Gmail} alt="Email" width="50" height="50" /></a>
        </div>
      </div>
      <div className={style.footerColumn}>
        <h4>Catalog</h4>
        <ul className={style.footerList}>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/subcategories">Subcategories</Link></li>
          <li><Link to="/all">All</Link></li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h4>Information</h4>
        <ul className={style.footerList}>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h4>Terms and Conditions</h4>
        <ul className={style.footerList}>
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/cookies-policy">Cookies Policy</Link></li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h4>Customer Service</h4>
        <ul className={style.footerList}>
          <li><Link to="/customer-service">Customer Service</Link></li>
          <li><Link to="/divisions">Divisions</Link></li>
        </ul>
        <h4>Connect with Us</h4>
        <ul className={style.footerList}>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/social-media">Social Media</Link></li>
        </ul>
      </div>
      <div className={style.footerBottom}>
        {/* <a href="#top"><FontAwesomeIcon icon={faArrowUp} /></a> */}
        <div className={style.footerPaymentIcons}>
          {/* <FontAwesomeIcon icon={faCreditCard} />
          <FontAwesomeIcon icon={faMoneyCheck} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;