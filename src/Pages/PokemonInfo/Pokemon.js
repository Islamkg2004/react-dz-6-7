import React from 'react';
import { useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {getPokemonByName} from "../../api/getPokemon";
import '../../App.css'
function Pokemon() {
    const [pokemon, setPokemon] = useState()
    const { name } = useParams()
    useEffect(() => {
       getPokemonByName(name)
           .then((pokemon) => setPokemon(pokemon))
    }, [name])

    return (
        <>
            <div className='pokem' >
                <p> Имя покемона:{pokemon?.name}</p>
                <img src={pokemon && pokemon.sprites.other.dream_world.front_default} alt=""/>
            </div>
        </>
    );
}

export default Pokemon;