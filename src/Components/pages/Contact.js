import React from 'react'
import { Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export default function Contact() {
  return (
    <>
    <Container fluid className='contact banner'>
     <div className="Row">
       <div className='col-sm-12 '>
         <h1 className='text-center my-9'>This is Contact Page</h1>
         <div className='extra-divs w-100 d-flex justify-content-center'>
         <Button className='w-10 my-3 btn btn-danger'>Contact Us</Button></div>
       </div>
     </div>
   </Container>
   </>
  )
}
