import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./Home.module.css";
import { CustomButton } from "./CustomButton";
import { SearchBar } from "./SearchBar";
import Paginate from "./Paginate";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.diets);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(allRecipes);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipes());
  };

  return (
    <>
      {/* Main Header */}
      <header className={style.main_header}>
        <div className={style.main_header_left}>
          <Link to="/recipes">
            <CustomButton text="Crear Nueva Receta" />
          </Link>
          <CustomButton
            text="Cargar todas las recetas"
            alHacerClick={(e) => handleClick(e)}
          />
        </div>

        <h1>FOOD ENCYCLOPEDIA</h1>

        <div className={style.main_header_filtersearchbar}>
          <SearchBar />

          {/* Filtros */}

          <div>
            <select>
              <option value="ascendente">Ascendente</option>
              <option value="descendente">Descendente</option>
            </select>

            <select>
              <option value="All">Todas las dietas</option>
              {allDiets?.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>

            <select>
              <option value="All">Todos las recetas</option>
              <option value="api">Recetas de la API</option>
              <option value="created">Recetas creadas</option>
            </select>
          </div>
        </div>
      </header>

      {/* Contenedor principal del Home  */}

      <Paginate
        allRecipes={allRecipes}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className={style.grid_container}>
        {allRecipes?.map((el) => {
          let diets = el.diets.length
            ? el.diets[0].name
              ? el.diets.map((el) => el.name)
              : el.diets
            : null;
          return (
            <div key={el.id}>
              <Link to={`/home/${el.id}`}>
                <Card
                  image={el.image}
                  name={el.name}
                  diets={diets}
                  key={el.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
