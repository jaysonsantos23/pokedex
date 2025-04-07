import {fetchPokemonsData, fetchImagePokemon, fetchPokemonData} from '../rest/PokemonRest.js'


export const getPokemonsPage = async (offset, limit) => {
    const pokemonsData = await fetchPokemonsData(offset, limit);
    return {
        "pokemons": pokemonsData?.results,
        "count": pokemonsData?.count
    }
}

export const getPokemon = async (pokemonId) => {
    return fetchPokemonData(pokemonId);
}

export const getImagePokemon = (pokemonId) => {
    return fetchImagePokemon(pokemonId);
}

