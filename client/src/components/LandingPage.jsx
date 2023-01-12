import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'


export default function LandingPage(){
    return (
        <div className={style.background}>
            <div className={style.showcase}>
                <h1>Bienvenidos a la mejor pagina de coso</h1>
                <Link to="/home">
                    <button>Ingresar a la página principal</button>
                </Link>
            </div>
        </div>
    )
} 