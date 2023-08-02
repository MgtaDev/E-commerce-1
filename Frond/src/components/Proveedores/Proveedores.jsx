import React from 'react';
import Marca from '../../assets/img/marca.png'
import style from './Proveedores.module.css'

const Proveedores = () => {


return (
    <div className={style.Proveedores}>
        <h1 className={style.titulo}>Contacta con proveedores</h1>

        <div className={style.flex}>
        <img src={Marca} alt="" />
        <img src={Marca} alt="" />
        <img src={Marca} alt="" />
        <img src={Marca} alt="" />
        </div>

    </div>
    )
}
export default Proveedores;