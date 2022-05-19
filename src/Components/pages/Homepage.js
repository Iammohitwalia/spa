import React from 'react'
import { Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export default function Homepage() {
  return (
   <>
  <Container fluid className='banner'>
    <div className="Row">
      <div className='col-sm-12 '>
        <h1 className='text-center my-9'>This is Homepage</h1>
        <div className='extra-divs w-100 d-flex justify-content-center'>
        <Button className='my-3 w-10'>Learn More</Button></div>
      </div>
    </div>
  </Container>
   </>
  )
}
