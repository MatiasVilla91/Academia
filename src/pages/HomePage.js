import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import courses from '../data/coursesData';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenido a Academia Astral</h1>
      <p>Explora nuestros cursos esotéricos y místicos.</p>
      
      <Carousel>
        {courses.map(course => (
          <Carousel.Item key={course.id}>
            <img
              className="d-block w-100"
              src={course.image}
              alt={course.title}
            />
            <Carousel.Caption>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5">
        <Row>
          {courses.map(course => (
            <Col key={course.id} sm={12} md={6} lg={4} className="mb-4">
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
