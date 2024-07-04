import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
   <header>
    <nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TransaccionesApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='p-2 ' to='/' >Crear una transaccion</Link>
            <Link className='p-2 ' to='/resumen'>Ver Transacciones</Link>
            <Link className='p-2 ' href="/buscar">Buscar</Link>
            <Link className='p-2 ' href="/resumen">Resumen</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </nav>
   </header>
  )
}
