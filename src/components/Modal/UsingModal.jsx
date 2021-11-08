import React from "react";
import Modal from "./Modal";
import { useModal } from "./hooks/useModal";
import { Button } from "@mui/material";
import './scss/modal.scss'

const UsingModal = () => {
  const [isOpenCard, openModalCard, closeModalCard] = useModal(false);
  return (
    <>
      <Button onClick = {openModalCard} className = 'btn-card' color = 'primary' variant = 'outlined' >Click Modal example</Button>
      <Modal isOpen = {isOpenCard} closeModal = {closeModalCard}>
        <h2> <strong>Aquí escribimos el contenido del Modal</strong> </h2>
      </Modal>
    </>
  )
};

export default UsingModal;
