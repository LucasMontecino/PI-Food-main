import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, getDiets } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Home(){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);
    const allDiets = useSelector((state) => state.diets);
    console.log(allRecipes)

    useEffect(() => {
        dispatch(getRecipes()); 
        dispatch(getDiets());       
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getRecipes());
    }

    return (
        <div>
            <Link to="/recipes">
                <button>Crear Receta Nueva</button>
            </Link>
            <h1>Recetas!!!!</h1>
            <button onClick={(e) => {handleClick(e)}}>Volver a cargar todas las recetas</button>

            <div>
                <select>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>

                <select>
                    <option value="All">Todas las dietas</option>
                    {
                        allDiets?.map((el) => (
                            <option value={el.name} key={el.id}>{el.name}</option>
                        ))
                    }
                </select>

                <select>
                    <option value="All">Todos las recetas</option>
                    <option value="api">Recetas de la API</option>
                    <option value="created">Recetas creadas</option>
                </select>

            </div>

            {
                allRecipes?.map((el) => {
                    return (
                        <fragment>
                            <Link to={"/home/" + el.id}>
                                <Card name={el.name} image={el.image} key={el.id}/>
                            </Link>
                        </fragment>
                    )
                })
            }
        </div>

    )

}