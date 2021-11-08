import { toast } from 'react-toastify';
  
// Parameters:
// type: 'info', 'success, 'warning', 'error', 'default'
// message: String
export const customAlerts = (type, message) => {
  // Aquí podemos poner las opciones de la alerta: posición, tiempo de cerrado,...
  const options = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };
  switch (type) {
    case 'info':
      return toast.info(message, options);
    case 'success':
      return toast.success(message, options);
    case 'warning':
      return toast.warn(message, options);
    case 'error':
      return toast.error(message, options);
    case 'default':
      return toast(message, options);
    default:
      break;
  };
};