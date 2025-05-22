import React from "react";

import styles from "./styles.module.css";

//libraries components
import { Modal, Button } from "react-bootstrap";

export default function CustomModal({
  show,
  handleClose,
  title,
  children,
  onConfirm,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName={styles.customModalDialog}
      contentClassName={styles.customModalContent}
    >
      <Modal.Header closeButton className={styles.customModalHeader}>
        <Modal.Title className={styles.customModalTitle}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.customModalBody}>{children}</Modal.Body>
      <Modal.Footer className={styles.customModalFooter}>
        <Button className={styles.btn} variant="primary" onClick={handleClose}>
          Voltar
        </Button>
        <Button className={styles.btn} variant="success" onClick={onConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
