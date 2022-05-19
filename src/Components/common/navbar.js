import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

   const navbar = () => {
  return (
    <>
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand>React Single Page App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className='menu-item' to='/' isactive >Homepage</NavLink>
      <NavLink className='menu-item' to='/about'>About</NavLink>    
      <NavLink className='menu-item' to='/contact'>Contact</NavLink>    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{/* active clr chnage */}
{/* style={({isActive})=>{return{background: isActive ? 'red': ''}}} */}
    </>
  );
};
export default navbar;

