import React from 'react'
import { Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <Container className='bg-light p-3' fluid>
        <div className='Row d-flex'>
          <div className='col-sm-4'>
            <h4 className='text-center my-3'>
              Single Page App
            </h4>
            <p>Lorem ipsum dummy text is coming herefor the footer we can change or add the text later </p>
          </div>
          <div className='col-sm-4'>
            <h5 className='text-center'>Quick Links</h5>
            <ul className='footer-menus'>
              <li><NavLink className='menu-item' to='/spa' isactive >Homepage</NavLink>

              </li>
              <li>      <NavLink className='menu-item' to='/about'>About</NavLink> </li>
              <li><NavLink className='menu-item' to='/contact'>Contact</NavLink> </li>
            </ul>
          </div>
          <div className='col-sm-4'>
            <h5 className='text-center'>Services</h5>
            <ul className='footer-menus'>
              <li><NavLink className='menu-item' to='/spa' isactive >Homepage</NavLink>

              </li>
              <li>      <NavLink className='menu-item' to='/about'>About</NavLink> </li>
              <li><NavLink className='menu-item' to='/contact'>Contact</NavLink> </li>
            </ul>
          </div>
      

        </div>
      </Container>
    </>
  )
};
export default Footer;
