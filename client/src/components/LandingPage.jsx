import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(){
    return (
        <div>
            <h1>Bienvenidos a la mejor pagina de coso</h1>
            <Link to="/home">
                <button>Ingresar a la página principal</button>
            </Link>
        </div>
    )
} 