import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Card style={{ width: '18rem' }} className="course-card">
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/course/${course.id}`}>Ver Curso</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
