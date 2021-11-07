import React from 'react';
import { Grid, Paper, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    botonPersonalizado: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    paperStyle: {
        padding: 20, 
        height: '70%', 
        width: 280, 
        margin: '60px auto'
    }
})


export default function Login() {
    
    const classes = useStyles();

    return (
        <section>
            <Grid>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align='center'>
                        <h2>INICIA SESION</h2>
                    </Grid>
                    <Grid align='start' >
                        <h5>Username:</h5>
                    </Grid>
                        <TextField label='username' placeholder='Enter your username' fullWidth required></TextField>
                    <Grid align='start'>
                        <h5>Password:</h5>
                    </Grid>                    
                    <TextField label='password' type='password' placeholder='Enter your password' fullWidth required ></TextField>     
                    <Box>              
                    <Button type='submit' color='primary' variant="contained" className={classes.botonPersonalizado} sx={{ mt: 2, mb: 2, p: 1 }}>SIGN IN</Button>
                    </Box>
                    <p>Si no estas registrado. Registrate <a href=' '>aqui</a></p>
                </Paper>
            </Grid>
        </section>
    )
}
