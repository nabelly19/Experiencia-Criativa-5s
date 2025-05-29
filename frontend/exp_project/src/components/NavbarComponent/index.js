import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// styles
import styles from "./styles.module.css"

export default function Header() {
  return (
    <Navbar  expand="lg" className={styles.custom_navbar}>
        <Container>
          <Navbar.Brand className={styles.navbar_brand} href="/">SOPRO</Navbar.Brand>
          <Navbar.Toggle className={styles.nav_toggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={styles.nav_collapse} id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className={styles.nav_link} href="/login">Login</Nav.Link>
                            <Nav.Link className={styles.nav_link} href="/criar">Sobre</Nav.Link>
                            <Nav.Link className={styles.nav_link} href="/">Planos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
