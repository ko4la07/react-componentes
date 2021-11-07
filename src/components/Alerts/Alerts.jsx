import React from "react";
import { Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customAlerts } from "./customAlerts";

const Alerts = () => {
  return (
    <section>
      <Button color = 'primary' variant = 'outlined' onClick = {() =>customAlerts('info', 'Info alert')}>info</Button>
      <Button color = 'primary' variant = 'outlined' onClick = {() =>customAlerts('success', 'Success alert')}>success</Button>
      <Button color = 'primary' variant = 'outlined' onClick = {() =>customAlerts('warning', 'Warning alert')}>warning</Button>
      <Button color = 'primary' variant = 'outlined' onClick = {() =>customAlerts('error', 'Error alert')}>error</Button>
      <Button color = 'primary' variant = 'outlined' onClick = {() =>customAlerts('default', 'Default alert')}>default</Button>
      {/* Le puedes dar estilos en toastStyle */}
      <ToastContainer toastStyle={{ backgroundColor: 'rgba(225, 225, 225, 1)', padding: '15px', fontSize: '16px', color: 'black',}} />
    </section>
  )
}

export default Alerts;
