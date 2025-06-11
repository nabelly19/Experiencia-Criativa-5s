import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import CustomInputComponent from "../../components/CustomInputComponent";
import WaveBackground from "../../components/WaveComponent";
import useUserStore from "../../store/useUserStore";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Importando as ações da store
  const { setUser } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();    

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Obter os dados do usuário e token da resposta
        const data = await response.json();
        
        // Salvar os dados do usuário na store global
        setUser(data);      

        window.alert("Login realizado com sucesso!");
        //encaminhar para a página de dashboard
        window.location.href = "/management"; 
      } else {
        // erros de resposta aqui
        window.alert("Esses dados não constam em nossos registros");
      }
    } catch (error) {
      // erros de rede ou outros aqui
      window.alert("Erro na requisição:", error);
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
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                variant="primary"
                type="submit"
                className={styles.loginBtn}
              >
                ENTRAR
              </Button>
            </Form>
            <div className={styles.registerArea}>
              <p>Não possui uma conta?</p>
              <a href="/">Registre-se Agora</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
