import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchSharpIcon
          sx={{ color: 'action.active', mr: 1, my: 3 }} />
        <TextField
          label="Escribe aquí..."
          variant="standard"
          fullWidth
          helperText="Por favor ingrese lo que desee buscar"
          type="search"
          onChange={onSearchValueChange}
          value={searchValue}
        />
      </Box>
    </>
  )
}

export default Search;
