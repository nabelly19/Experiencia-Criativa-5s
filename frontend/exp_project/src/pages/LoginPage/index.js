import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import CustomInputComponent from "../../components/CustomInputComponent";
import WaveBackground from "../../components/WaveComponent";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sua-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // após login bem-sucedido
        console.log("Login realizado com sucesso!");
      } else {
        // erros de resposta aqui
        console.error("Erro ao realizar login.");
      }
    } catch (error) {
      // erros de rede ou outros aqui
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <WaveBackground />
      <Container className={styles.loginContainer}>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <h2 className={styles.loginTitle}>Faça já o seu Login</h2>
            <Form onSubmit={handleSubmit}>
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
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
              <Button variant="primary" type="submit" className={styles.loginBtn}>
                ENTRAR
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
