import { Grid, Box, TextField, InputAdornment } from '@mui/material';
// import { SearchSharpIcon } from '@mui/icons-material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchSharpIcon
              sx={{ color: 'action.active', mr: 1, my: 3 }} />
            <TextField
              label="Escribe aquí..."
              variant="standard"
              fullWidth
              helperText="Por favor ingrese lo que desee buscar"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Search;
