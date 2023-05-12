import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            selectedGenerations: new Set()
        };
    }

    componentDidMount() {
        this.loadPokemonList();
    }

    async loadPokemonList() {
        const response = await fetch("https://pokeapi.co/api/v2/type/1");
        const data = await response.json();
        const pokemonUrls = data.pokemon.map(pokemonData => pokemonData.pokemon.url);
        const pokemonList = await Promise.all(pokemonUrls.map(url => this.loadPokemonData(url)));
        this.setState({ pokemonList });
    }

    async loadPokemonData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            img: data.sprites.other.dream_world.front_default,
            generation: Math.ceil(data.id / 151)
        };
    }

    handleGenerationCheckboxChange = (event) => {
        const generation = parseInt(event.target.value);
        const selectedGenerations = new Set(this.state.selectedGenerations);
        if (selectedGenerations.has(generation)) {
            selectedGenerations.delete(generation);
        } else {
            selectedGenerations.add(generation);
        }
        this.setState({ selectedGenerations });
    }

    render() {
        const { pokemonList, selectedGenerations } = this.state;
        const filteredPokemonList = pokemonList.filter(pokemon => selectedGenerations.has(pokemon.generation));
        return (
            <div>
                <h1>Pokemon Page</h1>
                <div>
                    <label><input type="checkbox" value="1" checked={selectedGenerations.has(1)} onChange={this.handleGenerationCheckboxChange} /> Generation 1</label>
                    <label><input type="checkbox" value="2" checked={selectedGenerations.has(2)} onChange={this.handleGenerationCheckboxChange} /> Generation 2</label>
                    <label><input type="checkbox" value="3" checked={selectedGenerations.has(3)} onChange={this.handleGenerationCheckboxChange} /> Generation 3</label>
                    <label><input type="checkbox" value="4" checked={selectedGenerations.has(4)} onChange={this.handleGenerationCheckboxChange} /> Generation 4</label>
                    <label><input type="checkbox" value="5" checked={selectedGenerations.has(5)} onChange={this.handleGenerationCheckboxChange} /> Generation 5</label>
                    <label><input type="checkbox" value="6" checked={selectedGenerations.has(6)} onChange={this.handleGenerationCheckboxChange} /> Generation 6</label>
                    <label><input type="checkbox" value="7" checked={selectedGenerations.has(7)} onChange={this.handleGenerationCheckboxChange} /> Generation 7</label>
                    <label><input type="checkbox" value="8" checked={selectedGenerations.has(8)} onChange={this.handleGenerationCheckboxChange} /> Generation 8</label>
                </div>
                <ul>
                    {filteredPokemonList.map(pokemon => <li key={pokemon.id}>{pokemon.name}
                        <img src={pokemon.img} alt=""/>(Gen {pokemon.generation})</li>)}
                </ul>
            </div>
        );
    }
}

export default AboutUs;