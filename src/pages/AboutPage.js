import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../assets/logo.png';
//import coverImage from '../assets/cover.jpg';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="mb-4">
          {/*  <Card.Img variant="top" src={coverImage} />*/ }
            <Card.Body>
              <Row className="justify-content-center mb-4">
                <Col md={3} className="text-center">
                  <Image src={logo} roundedCircle fluid />
                </Col>
              </Row>
              <h1 className="text-center">Sobre Academia Astral</h1>
              <p>
                Bienvenido a Academia Astral, tu fuente confiable de conocimiento esotérico y místico. Nuestra misión es proporcionar un portal accesible y confiable para todos aquellos interesados en explorar el vasto mundo del esoterismo y la mística.
              </p>
              <p>
                En Academia Astral, ofrecemos una amplia gama de cursos diseñados para ayudarte a expandir tu conocimiento y comprensión de diversas prácticas esotéricas. Ya sea que estés interesado en la meditación, el sueño lúcido, el tarot, la astrología o cualquier otro campo místico, aquí encontrarás recursos valiosos para tu viaje.
              </p>
              <h2>Nuestra Relación con Hotmart</h2>
              <p>
                Es importante destacar que los cursos que encuentras en nuestra plataforma son vendidos y gestionados por Hotmart, una plataforma líder en la venta de productos digitales. Academia Astral actúa únicamente como un portal de información y enlace entre los usuarios interesados y los cursos disponibles en Hotmart.
              </p>
              <p>
                Esto significa que, aunque proporcionamos descripciones detalladas y recomendaciones sobre los cursos, todas las transacciones de compra, así como el acceso a los materiales del curso, son manejadas directamente por Hotmart. Nosotros no vendemos los cursos directamente ni gestionamos las transacciones financieras.
              </p>
              <p>
                 Cualquier persona en el mundo puede acceder a nuestra web y comprar los cursos, excepto en Venezuela y otros países donde Hotmart no opera debido a restricciones legales o regulatorias. 
              </p>
              <h2>Nuestro Compromiso</h2>
              <p>
                Nuestro compromiso es asegurarnos de que tengas acceso a la mejor información posible para tomar decisiones informadas sobre tu educación esotérica. Nos esforzamos por mantener nuestro contenido actualizado y relevante, ofreciendo descripciones precisas y revisiones imparciales de los cursos.
              </p>
              <p>
                Gracias por confiar en Academia Astral como tu fuente de conocimiento esotérico. Estamos aquí para apoyarte en cada paso de tu viaje espiritual y educativo.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
