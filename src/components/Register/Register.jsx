import React from "react";
import {TextField, Button, Typography, Link} from '@mui/material';
import './register.scss';

const Register = () => {
    return(
        <section className="registerContainer">
            <Typography className="titleRegister" variant="h4" component="h4">
                REGISTRATE
            </Typography>
            <form className="formContainer">
                <TextField className="inputName"
                    id="outlinedBasic"
                    label="Nombre"
                    type="text"
                />
                <TextField className="inputEmail"
                    id="outlinedEmailInput"
                    label="Correo"
                    type="email"
                />
                <TextField className="inputPassword"
                    id="outlinedPasswordInput"
                    label="Contraseña"
                    type="password"
                    autoComplete="currentPassword"
                />
                <TextField className="inputPasswordConfirm"
                    id="outlinedPasswordInputConfirm"
                    label="Confirmar contraseña"
                    type="password"
                    autoComplete="currentPassword"
                />
                <div className="btnContainer">
                    <Button className="btnRegister" variant="contained" size="large">Crear cuenta</Button>
                </div>
            </form>
            <Typography className="linkLogin" variant="p" component="p">
                ¿Ya tienes cuenta? Ingresa <Link className="link" href="#">Aquí</Link>
            </Typography>
        </section>
    );
}

export default Register;