import React, { useState } from "react";
import styles from "./styles.module.css";

//assets
import wppIcon from "../../assets/whatsapp.svg";

//components
import CustomModal from "../ModalComponent";
import CustomInputComponent from "../CustomInputComponent";
import { Form, Button } from "react-bootstrap";

export default function ButtonWppComponent() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validação simples
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
  
    try {
      const response = await fetch('https://1b89-200-192-114-19.ngrok-free.app/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
        return;
      }
  
      // Sucesso
      alert('Registro realizado com sucesso!');
      setShowModal(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        onConfirm={handleSubmit}
      >
        <Form onSubmit={handleSubmit}>
          <CustomInputComponent
            label="Nome"
            type="text"
            placeholder="Digite seu nome..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <CustomInputComponent
            label="Telefone"
            type="tel"
            placeholder="Digite seu telefone..."
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <CustomInputComponent
            label="Email"
            type="email"
            placeholder="Digite seu email..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <CustomInputComponent
            label="Senha"
            type="password"
            placeholder="Digite sua senha..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <CustomInputComponent
            label="Confirme sua senha"
            type="password"
            placeholder="Confirme sua senha..."
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

        <Button className={styles.btn} variant="success" type="submit">
          Registrar-se
        </Button>
        </Form>
      </CustomModal>
    </>
  );
}
