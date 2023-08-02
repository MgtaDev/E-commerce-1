import { useState } from 'react';
import logo from '../../assets/img/Logo.png';

const AboutUs = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getText = () => {
    if (language === 'es') {
      return (
        <>
          <img src={logo} alt="Bonita & Lovely" />
          <p>
            Bonita & Lovely es una tienda de maquillaje dedicada a realzar tu belleza y brindarte la confianza para brillar en cada
            paso. Nuestros productos de SkinCare, maquillaje y accesorios de alta calidad te ayudarán a sentirte segura y hermosa,
            expresando tu auténtica belleza. En Bonita & Lovely, creemos en la belleza que viene desde adentro hacia afuera, y estamos
            aquí para acompañarte en tu viaje hacia la autoexpresión y el amor propio.
          </p>
        </>
      );
    } else {
      return (
        <>
          <img src={logo} alt="Bonita & Lovely" />
          <p>
            Bonita & Lovely is a makeup store dedicated to enhancing your beauty and giving you the confidence to shine at every step.
            Our high-quality SkinCare, makeup, and accessories will help you feel secure and beautiful, expressing your authentic beauty.
            At Bonita & Lovely, we believe in beauty that comes from within, and we are here to accompany you on your journey to self-expression
            and self-love.
          </p>
        </>
      );
    }
  };

  return (
    <div className="about-us">
      <div className="language-selector">
        <button onClick={() => handleLanguageChange('es')} className={language === 'es' ? 'active' : ''}>
          Español
        </button>
        <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>
          English
        </button>
      </div>
      {getText()}
    </div>
  );
};

export default AboutUs;