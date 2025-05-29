import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import { PersonCircle } from "react-bootstrap-icons";

// components
import CustomModal from "../ModalComponent";
import CustomInputComponent from "../CustomInputComponent";

// styles
import styles from "./styles.module.css";

export default function LoggedHeader() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  // 1) Busca dados do usuário ao montar o componente
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/me"); // endpoint que retorna { name, email, ... }
        const data = await res.json();
        setUser({ name: data.name, email: data.email });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // 2) Atualiza estado local ao editar campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((u) => ({ ...u, [name]: value }));
  };

  // 3) Envia PUT para salvar alterações
  const handleSave = async () => {
    try {
      const res = await fetch("/api/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error("Erro ao salvar");
      setShowProfile(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar expand="lg" className={styles.custom_navbar}>
        <Container>
          <Navbar.Brand className={styles.navbar_brand} href="/">
            SOPRO
          </Navbar.Brand>
          <Navbar.Toggle
            className={styles.nav_toggle}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className={styles.nav_collapse}
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              <Nav.Link className={styles.nav_link}>
                <div
                  className={styles.profileIcon}
                  onClick={() => setShowProfile(true)}
                >
                  <PersonCircle size={28} />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 4) Modal de perfil */}
      <CustomModal
        show={showProfile}
        handleClose={() => setShowProfile(false)}
        title="Seu Perfil"
        onConfirm={handleSave}
      >
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <p>Altere as suas informações pessoais sempre que desejar!</p>

            <Form>
              <CustomInputComponent
                label="Nome"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={user.name}
                onChange={handleChange}
              />
              <CustomInputComponent
                label="E-mail"
                type="email"
                name="email"
                placeholder="Seu email"
                value={user.email}
                onChange={handleChange}
              />
            </Form>
          </>
        )}
      </CustomModal>
    </>
  );
}
