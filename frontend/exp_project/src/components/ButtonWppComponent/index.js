import React, { useState } from "react";
import styles from "./styles.module.css";

//assets
import wppIcon from "../../assets/whatsapp.svg";

//components
import CustomModal from "../ModalComponent";
import CustomInputComponent from "../CustomInputComponent";
import { Form } from "react-bootstrap";

export default function ButtonWppComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleConfirm = () => {
    // backend
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.buttonWpp} onClick={handleOpen}>
        <div className={styles.buttonContent}>
          <img src={wppIcon} className={styles.wppIcon} alt="Register Button" />
          <div className={styles.buttonLabel}>
            <p>Começar no</p>
            <h5>WhatsApp</h5>
          </div>
        </div>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Registre-se"
        onConfirm={handleConfirm}
      >
        <Form>
          <CustomInputComponent
            label="Nome"
            type="text"
            placeholder="Digite seu nome..."
            name="nome"
          />

          <CustomInputComponent
            label="CPF"
            type="text"
            placeholder="Digite seu CPF..."
            name="cpf"
          />

          <CustomInputComponent
            label="Telefone"
            type="tel"
            placeholder="Digite seu telefone..."
            name="telefone"
          />

          <CustomInputComponent
            label="Email"
            type="email"
            placeholder="Digite seu email..."
            name="email"
          />
        </Form>
      </CustomModal>
    </>
  );
}
