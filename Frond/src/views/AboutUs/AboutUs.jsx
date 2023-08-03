import { useState } from 'react';
import Logo from '../../../src/assets/img/logoBonitaLovelyw.png';
import icon3 from '../../../src/assets/img/icon3.svg'
import NavBar from '../../components/NavBar/NavBar';
import style from './AboutUs.module.css'


const AboutUs = () => {
  return (
    <>
      <NavBar />

      <div class={style.container}>
        <div class={style.tittleAbout}>Quienes somos?</div>
        <div class={style.logo}><img src={Logo} alt="logobonitaAndLovely" /></div>
        <div class={style.aboutTxt}>
          Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic
          typesetting, remaining essentially unchanged.
        </div>
        <div class={style.txtBx1}>
          Lorem Ipsum is simply dummy
          text of the printing and typesetting
          industry. Lorem Ipsum has been
          the industry's standard dummy
          text ever since the 1500s,
        </div>
        <div class={style.txtBx2}>
          Lorem Ipsum is simply dummy
          text of the printing and typesetting
          industry. Lorem Ipsum has been
          the industry's standard dummy
          text ever since the 1500s,
        </div>
        <div class={style.txtBx3}>
          Lorem Ipsum is simply dummy
          text of the printing and typesetting
          industry. Lorem Ipsum has been
          the industry's standard dummy
          text ever since the 1500s,
        </div>
        <div class={style.icon1}></div>
        <div class={style.icon2}></div>
        <div class={style.icon3}><img src={icon3} alt="icon3-360" /></div>
      </div>

    </>
  )
};
export default AboutUs;