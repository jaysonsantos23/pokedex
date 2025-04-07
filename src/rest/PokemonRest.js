import { default as axios } from 'axios';

const BASE_URL_POKE_API = "https://pokeapi.co/api/v2"
const POKEMON_ENDPOINT = "/pokemon"
const BASE_URL_POKEAPI_SPRITES = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"

export const fetchPokemonsData = async (offset, limit) => {
    return await axios
        .get(`${BASE_URL_POKE_API}${POKEMON_ENDPOINT}/?offset=${offset}&limit=${limit}`)
        .then((response) => {
            return response?.data
        });
}

export const fetchPokemonData = async (pokemonId) => {
    return await axios
        .get(`${BASE_URL_POKE_API}${POKEMON_ENDPOINT}/${pokemonId}`)
        .then((response) => {
            return response?.data
        });
}

export const fetchImagePokemon = (pokemonId) => {
    return `${BASE_URL_POKEAPI_SPRITES}/${pokemonId}.svg`
}