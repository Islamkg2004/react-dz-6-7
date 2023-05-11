import React, {useEffect, useState} from 'react';
import {fetchokemons} from "../../api/getPokemon";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Pagination from "../../Components/Pagination/Pagination";
import { Link} from "react-router-dom";





function  MainPage() {


    const [pokemonList,setPokemonList] = useState()
    const  limit = 10;
    const [offset, setOffset] = useState(1)
    const [count, setCount] = useState(1)
    const [page, setPage] = useState(1)
    const  handleNext = () => {
        if(page === count) return
        setOffset(prevState => prevState + limit)
        setPage(prevState => prevState + 1)
    }
    const  handlePrev = () => {
        if (page === 1) return
        setOffset(prevState => prevState - limit)
        setPage(prevState => prevState - 1)
    }
    useEffect(() => {
        fetchokemons({limit, offset}).then((data) => {
            setPokemonList([...data.results]);
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    },[offset])
    return (
        <div>
            MainPage
            <Link to={'/about-us'}>
                <button >ckick</button>

            </Link>
            <Link to={'/pokemon/pikachu'}>
                <button >
                    Button to 2
                </button>
            </Link>
            <Pagination
                page={page}
                count={count}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />


            <div className='pokemonList'>
                {pokemonList?.map(pokemon =>

                        <PokemonCard key={pokemon.name}
                                     pokemon={pokemon} />


               )}

            </div>

        </div>
    );
}

export default MainPage;