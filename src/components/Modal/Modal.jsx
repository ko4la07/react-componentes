import React from 'react';
// import { MdClose } from "react-icons/md";
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({children, isOpen, closeModal}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className = {`modal ${isOpen && 'is-open'}`} onClick = {closeModal}>
      <Box className = 'modal-container'onClick = {handleModalContainerClick}>
      <Button className="modal-close" onClick = {closeModal}><CloseIcon/></Button>
      {children}
      </Box>
    </article>
  )
};

export default Modal;
