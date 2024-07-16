import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courses from '../data/coursesData';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Academia Astral</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/AboutPage">Acerca de</Nav.Link>
          <NavDropdown title="Cursos" id="basic-nav-dropdown">
            {courses.map(course => (
              <NavDropdown.Item key={course.id} as={Link} to={`/course/${course.id}`}>
                {course.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
