import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Review from './Review';
import './SingleDoctor.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SingleDoc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [restDetails,setRestDetails]=useState({})
  //destructure
const {id} =useParams()
console.log(id);
const base_url='https://doctorapp-backend-glru.onrender.com/doctors'

const fetchRest=async()=>{
  const result = await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  setRestDetails(result.data)
}
useEffect(()=>{
fetchRest()
},[])
  return (
    <div className='' style={{backgroundColor:"rgba(157, 211, 255, 0.596)"}}>
    <Container className='mt-5 pt-5' >
     <Row className='px-2'>

       <Col lg={3}>
        <Card className='p-2 mb-3'>
       <div className='text-center  '>
        <img src="/images/docpic.jpg" alt=""  className='img-fluid rounded-2'/>
       <h4 className='my-3'>{restDetails.name}  ({
           restDetails.specialty})</h4>
       
  <p>{restDetails.email}</p>
       </div>
           </Card>
       </Col>

       <Col lg={9} className=''>


       <div className=' bg-light rounded-4 doc-details' >
        
       <div className='  my-4'>
         <h3 >{restDetails.hospital}</h3> <hr />
       <h5>Address: {restDetails.address}</h5>
       <h5>Available Time: {restDetails.available_hours}</h5>
       <h5>Contact No: {restDetails.phone}</h5>


       <hr />
<Container className='d-flex justify-content-between align-items-center'>
<Row>

  <Col sm={12} md={6} lg={6}>
    <h5><strong>Available Days:</strong></h5>
 {restDetails.available_days && restDetails.available_days.map((item)=>(
   <strong key={item.id}>{item} | </strong>
   ))
}
   </Col>
   <Col sm={12}  md={6} lg={6}>
    <button className='btn btn-primary my-4 ' onClick={handleShow}>Get an Appoinment</button>
   </Col>
   </Row>
</Container>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get an Appoinment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column gap-2'>

            <input type="text" placeholder='Name' className='form-control ' />
            <input type="text" placeholder='email' className='form-control'/>
            <textarea type="text" placeholder='Message' className='form-control'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

       </div>
     </div>
  
     </Col>
     <hr />
     <Col lg={12} className='my-4 mb-5'>
      <strong><Review rw={restDetails.reviews}/></strong>
     </Col>
     </Row>

  
   </Container> 

   </div>
  )
}

export default SingleDoc