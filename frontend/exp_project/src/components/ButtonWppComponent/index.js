import React, { useState } from "react";
import styles from "./styles.module.css";

//assets
import wppIcon from "../../assets/whatsapp.svg";

//components
import CustomModal from "../ModalComponent";
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
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>
        </Form>
      </CustomModal>
    </>
  );
}
