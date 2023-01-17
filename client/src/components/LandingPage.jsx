import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.background}>
      <div className={style.showcase}>
        <h1>Bienvenidos a la mejor pagina de coso</h1>
        <Link to="/home">
          <CustomButton text="Ir a la Página Principal" />
        </Link>
      </div>
    </div>
  );
}
