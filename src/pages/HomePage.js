import React, { useContext } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import { DataContext } from '../DataContext';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  const courses = useContext(DataContext);

  if (!courses) {
    return <div>Cargando cursos...</div>;
  }

  return (
    <div className="homepage">
      <h1 className="my-4">Bienvenido a Academia Astral</h1>
      <p className="mb-4">Explora nuestros cursos esotéricos y místicos.</p>
      
      <Carousel className="mb-4">
        {courses.map(course => (
          <Carousel.Item key={course.id}>
            <Link to={`/course/${course.id}`}>
            <img
              className="d-block w-100"
              src={course.image}
              alt={course.title}
            />
            <Carousel.Caption>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
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
