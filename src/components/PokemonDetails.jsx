import React, { useEffect, useState } from "react";
import {getImagePokemon, getPokemon} from '../service/PokemonService.js'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 4,
  p: 4,
};

const PokemonDetails = (props) => {
  const [open, setOpen] = useState(false)
  const [pokemon, setPokemon] = useState(null)
  const [load, setLoad] = useState(false)

  const {pokemonId} = props

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect( () => {
    if (!open) return
    const getData = async () => {
      setLoad(false)
      setPokemon(await getPokemon(pokemonId))
      setLoad(true)
    }
    getData()
  }, [pokemonId, open]);

  return (
  <>
    <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        {load ? <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {pokemon?.name}
          </Typography>
          <img
              src={getImagePokemon(props.pokemonId)}
              alt={pokemon?.name}
              width={100}
              height={100}
              loading="lazy"
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Habilidades
            </Typography>
            <Stack direction="row" spacing={2}>
              {pokemon?.abilities?.map(index => 
                <Chip label={index.ability.name} />
              )}
            </Stack>
        
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tipos
          </Typography>
          <Stack direction="row" spacing={2}>
            {pokemon?.types?.map(index => <Chip label={index.type.name} />)}
          </Stack>
        </Box> : 
        <Box sx={style}>
          <CircularProgress />
        </Box>}
      </Modal>
  </>)
}

export default PokemonDetails;
