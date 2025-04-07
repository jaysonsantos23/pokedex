import PokemonDetails from './PokemonDetails.jsx'
import {getImagePokemon} from '../service/PokemonService.js'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const PokemonCard = (props) => {
    const {pokemon, pokemonId} =  props;

    

    return (
    <Card sx={{ width: 300, boxShadow: 5}}>
        <CardMedia
        component="img"
        alt={pokemon.name}
        height="300"
        image={getImagePokemon(pokemonId)}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
        </Typography>
        <PokemonDetails pokemonId={pokemonId} ></PokemonDetails>
        </CardContent>
    </Card>)
}

export default PokemonCard