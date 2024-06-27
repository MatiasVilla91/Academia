import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import courses from '../data/coursesData';

const CoursePage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <Container className="course-page">
      <Row>
        <Col md={8}>
          <h1>{course.title}</h1>
          <img src={course.image} alt={course.title} className="img-fluid mb-4" />
          <p>{course.details}</p>
          
          <h3>Contenido del Curso</h3>
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>Introducción a {course.title}</ListGroup.Item>
            <ListGroup.Item>Principios básicos</ListGroup.Item>
            <ListGroup.Item>Técnicas avanzadas</ListGroup.Item>
            <ListGroup.Item>Prácticas y ejercicios</ListGroup.Item>
            <ListGroup.Item>Evaluación final</ListGroup.Item>
          </ListGroup>

          <h3>Testimonios</h3>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>
                "Este curso me cambió la vida. La información es clara y muy bien explicada." - Alumno satisfecho
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block className="mb-4">Inscribirse Ahora</Button>
          <h3>Detalles del Curso</h3>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Duración:</strong> 10 horas</ListGroup.Item>
            <ListGroup.Item><strong>Nivel:</strong> Principiante a avanzado</ListGroup.Item>
            <ListGroup.Item><strong>Precio:</strong> $99.99</ListGroup.Item>
            <ListGroup.Item><strong>Instructor:</strong> John Doe</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePage;
