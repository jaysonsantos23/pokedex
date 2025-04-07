import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from "react";
import PokemonCardGrid from './components/PokemonCardGrid';


import Pagination from '@mui/material/Pagination';

const App = () => {

  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(null);

  const limit = 20;

  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * limit);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <PokemonCardGrid offset={offset} limit={limit} setPageCount={setPageCount} />
      </Box>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{marginTop:5}}
      >
        <Grid item xs={3}>
          <Pagination 
            count={Math.floor(pageCount / 20)} 
            page={page} 
            showFirstButton 
            showLastButton 
            size="large"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
