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
import useUserStore from "../../store/useUserStore";

export default function LoggedHeader() {
  const [showProfile, setShowProfile] = useState(false);
  const { user, setUser } = useUserStore();
  const [localUser, setLocalUser] = useState(user);

  useEffect(() => {
    //get user
    async function getUser() {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`);
        if (!res.ok) throw new Error("Falha ao buscar usuário");
        const data = await res.json();
        setLocalUser(data);
      } catch (err) {
        console.error(err);
        window.alert(err.message);
      }
    }
    getUser();
  }, []);


  

  // 2) Atualiza estado local ao editar campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalUser((u) => ({ ...u, [name]: value }));
  };

  // 3) Envia PUT para salvar alterações
  const handleSave = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: localUser.name,
          email: localUser.email,
        }),
      });
      if (!res.ok) throw new Error("Falha ao salvar");
      setShowProfile(false);
      setUser({
        ...user,
        name: localUser.name,
        email: localUser.email,
      });
    } catch (err) {
      console.error(err);
      window.alert(err.message);
    }
  };

  return (
    <>
      <Navbar expand="lg" className={styles.custom_navbar}>
        <Container>
          <Navbar.Brand className={styles.navbar_brand} href="/">
            SOPRO
          </Navbar.Brand>
          {/* <Navbar.Toggle
            className={styles.nav_toggle}
            aria-controls="basic-navbar-nav"
          /> */}
          {/* <Navbar.Collapse
            className={styles.nav_collapse}
            id="basic-navbar-nav"
          > */}
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
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      {/* 4) Modal de perfil */}
      <CustomModal
        show={showProfile}
        handleClose={() => setShowProfile(false)}
        title="Seu Perfil"
        onConfirm={handleSave}
      >
        {localUser ? (
          <>
            <p>Altere as suas informações pessoais sempre que desejar!</p>

            <Form>
              <CustomInputComponent
                label="Nome"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={localUser.name}
                onChange={handleChange}
              />
              <CustomInputComponent
                label="E-mail"
                type="email"
                name="email"
                placeholder="Seu email"
                value={localUser.email}
                onChange={handleChange}
              />
            </Form>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </CustomModal>
    </>
  );
}
