import React, {useEffect,useState} from 'react';
import {getPokemonByName} from "../../api/getPokemon";
import {Link} from "react-router-dom";
function PokemonCard({pokemon}) {
    const [pokemonInfo, setPokemonInfo] = useState();


    useEffect(()=>{
        getPokemonByName(pokemon.name)
            .then((data) =>{
                setPokemonInfo(data )
            })
    },[pokemon.name])

    return (
        <Link to={`/pokemon/${pokemon.name}`}>
            <div className='pokemonCard'>
                {pokemon.name}
                <img src={pokemonInfo &&  pokemonInfo.sprites.other.dream_world.front_default}  alt=""/>
            </div>
        </Link>

    );
}

export default PokemonCard;