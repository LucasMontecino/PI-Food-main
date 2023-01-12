import React from 'react'

export default function Card({ name, diets, image }){
    return (
        <div>
            <h3>{name}</h3>
            {diets?.map(el => <p key={el}>{el}</p>)}
            <img src={image} alt="no se encontró la imagen" width="200px" height="200px"/>
        </div>
    )
}