import React from 'react';
import styles from "./styles.module.css"
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className={styles.sitefooter}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h6>Sobre</h6>
                        <p className="text-justify">
                            <strong>SOPRO</strong> <i>Sistema de Organização e Planejamento para Redesenhar Objetivos.</i> Seu assistente virtual sempre disponível para apoiar você na construção e manutenção de hábitos saudáveis.
                        </p>
                    </Col>

                    <Col xs={6} md={3}>
                        <h6>Links</h6>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Entre em contato</a></li>
                            <li><a href="#">Política de privacidade</a></li>
                        </ul>
                    </Col>
                </Row>

                <hr />

                <Row className="mt-3">
                    <Col md={8} sm={6} xs={12}>
                        <p className={styles.copyrightText}>
                            Copyright &copy; 2025 Todos os direitos reservados por <a href="#">Montibeller</a>.
                        </p>
                    </Col>

                    {/* <Col md={4} sm={6} xs={12}>
                        <ul className={styles.socialIcons}>
                            <li><a className="facebook" href="#"><i className="bi bi-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="bi bi-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="bi bi-instagram"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    );
}