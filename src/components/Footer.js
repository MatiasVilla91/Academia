import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Academia Astral</h5>
            <p>Explora nuestros cursos esotéricos y místicos.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/PrivacyPolicy" className="text-white">Política de Privacidad</Link></li>
              <li><Link to="/CookiesPolicy" className="text-white">Política de Cookies</Link></li>
              <li><Link to="/TermsOfService" className="text-white">Términos de Servicio</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>
              Email: academiaastral@gmail.com<br />
              
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Academia Astral. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
