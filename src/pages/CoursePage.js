import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import useCourses from '../hooks/useCourses';

const CoursePage = () => {
  const { id } = useParams();
  const { courses, loading } = useCourses();

  if (loading) {
    return <div>Cargando curso...</div>;
  }

  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <Container className="course-page">
      <Row>
        <Col md={8}>
          <h1 className="mb-4">{course.title}</h1>
         
         
          
          <img src={course.image} alt={course.title} className="img-fluid mb-4" />

        

          <p>{course.details}</p>
          
          <h3>Contenido del Curso</h3>
          {course.content && course.content.length > 0 ? (
            <ListGroup variant="flush" className="mb-4">
              {course.content.map((item, index) => (
                <ListGroup.Item key={index}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No hay contenido disponible para este curso.</p>
          )}

          <h3>Testimonios</h3>
          {course.testimonials && course.testimonials.length > 0 ? (
            <div className="testimonials">
              {course.testimonials.map((testimonial, index) => (
                <Card key={index} className="mb-4">
                  <Row className="no-gutters">
                    <Col md={2}>
                      <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle m-3" />
                    </Col>
                    <Col md={10}>
                      <Card.Body>
                        <Card.Text>
                          "{testimonial.text}" - {testimonial.name}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          ) : (
            <p>No hay testimonios disponibles para este curso.</p>
          )}
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block className="mb-4"  href={course.link} target='_blank'>Inscribirse Ahora</Button>
          <h3>Detalles del Curso</h3>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Duración:</strong> {course.duration}</ListGroup.Item>
            <ListGroup.Item><strong>Nivel:</strong> {course.level}</ListGroup.Item>
            <ListGroup.Item><strong>Precio:</strong> {course.price}</ListGroup.Item>
            <ListGroup.Item><strong>Instructor:</strong> {course.instructor}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
     
     
    </Container>
  );
};

export default CoursePage;
