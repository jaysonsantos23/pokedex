import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard.jsx'
import {getPokemonsPage} from '../service/PokemonService.js'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const style = {
  justifyContent: "space-around",
  alignItems: "stretch",
}
 
const PokemonCardGrid = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState(false);

  const {offset, limit, setPageCount} = props

  const getPokemonId = (pokemon) => {
    return pokemons?.indexOf(pokemon) + offset + 1
  }

  useEffect(() => {
    const getAsyncData = async () => {
      setLoad(false)
      const pokemonsPage = await getPokemonsPage(offset, limit)
      setPokemons(pokemonsPage?.pokemons)
      setPageCount(pokemonsPage?.count)
      setLoad(true)
    }
    getAsyncData()
  }, [offset, limit, setPageCount]);

  return (
  <Grid container spacing={2} sx={style}>
    {load ? 
    pokemons?.map(pokemon => 
      <PokemonCard pokemon={pokemon} pokemonId={getPokemonId(pokemon)} ></PokemonCard>) : 
    <Box sx={style}>
      <CircularProgress />
    </Box>
    }          
  </Grid>)

}

export default PokemonCardGrid
