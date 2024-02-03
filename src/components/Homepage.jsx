import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import DocList from './DocList'
import doc1 from '../Assets/banner.jpg'
import about from '../Assets/about.png'
import './Homepage.css'


function Homepage() {
  return (
    <Container className='mt-5'>
         <Row className='p-4'>
        <Col className='d-flex flex-column justify-content-center'>
       <p  className="text-black banner-content"><span style={{color:"rgb(0, 114, 207)"}}>Doctor</span>  <br />Consultations</p>
        
        <p className='mini'>We aim to provide affordable health care for <br /> pateints round the clock with the help of our board-certified doctors.</p>
        <a href="#doctors">
<Button className='btn btn-outline-primary w-50'>Talk to a Doctor</Button></a>
        </Col>

        <Col className='mt-5'>
        <Image src={doc1} className="img-fluid"/>
<div className='icons'>

        <div className='icon my-2'><i className="fa-solid fa-phone" ></i></div>
        <div className='icon my-2'><i class="fa-regular fa-envelope"></i></div>
        <div className='icon my-2'><i class="fa-solid fa-location-dot"></i></div>
</div>
        </Col>
      </Row>

  <div className='spec-icons d-flex justify-content-around p-4 text-center  border my-5'>
    <div className='spec-icon'><i class="fa-regular fa-clock"></i>fastest Doctor Response</div>
    <div className='spec-icon'><i class="fa-solid fa-briefcase-medical"></i>Verified & Specialists Doctor</div>
    <div className='spec-icon'><i class="fa-solid fa-shield"></i>Private & Secure Consultations</div>
    <div className='spec-icon'><i class="fa-solid fa-hourglass"></i>Doctors Available 24X7</div>
  </div>
  <Container style={{backgroundColor:"rgb(0, 114, 207)"}} className='rounded-5'>
    <Row className='p-3 my-5 appoinment' >
    <Col className='d-flex align-items-center justify-content-center my-4' lg={4}>
        <Image src={about} className=' img img-fluid' width={"350px"}/>
        </Col>
        <Col className='d-flex flex-column justify-content-center text-white' lg={8}>
        <p>Need A Doctor For A Checkup</p>
        <h2 className='fw-bold'>Just Make An Appoinment</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi nam rerum ab officiis ut itaque nemo totam exercitationem, maiores sit dolor eveniet repellendus odio animi, dicta autem est quod.</p>
        </Col>
       
    </Row>
</Container>

<section id='doctors'>

  <DocList/>
</section>

<Container className='d-flex justify-content-center  rounded-5 align-items-center my-5' style={{backgroundColor:"rgb(0, 114, 207)"}}>
    <div className='d-flex justify-content-center align-items-center text-white last-box'>

  <span >MediConnect
</span>&nbsp;
<span className=' fw-bold' style={{color:"blue"}}>| </span>
<p  className='mt-3'>&nbsp; We are at your Service</p>
    </div>
</Container>


  <Container className='mt-5'>
    <h2>What Our Pateints Say</h2>

    <Row className=' my-5 gap-3 reviews'>

<Col className='d-flex gap-2'>
    <Card className='p-3 cards '>
        <div className='d-flex'>
            -------------------- &nbsp;
            <div className='pateints pat1'>M</div>
        </div>
        <p>Mark john</p>
        <p>"As a patient, I found this platform incredibly efficient for hassle-free appointments! The timely reminders were a lifesaver, ensuring I never missed an appointment."</p>
    </Card>

    <Card className='p-3 cards'>
        <div className='d-flex'>
            -------------------- &nbsp;
            <div className='pateints pat2'>A</div>
        </div>
        <p>Andrea Hill</p>
        <p>"Booking appointments as a patient was a breeze thanks to the user-friendly interface. The personalized reminders were a nice touch!"</p>
    </Card>

</Col>
<Col className='d-flex gap-2'>
    <Card className='p-3 cards'>
        <div className='d-flex'>
            -------------------- &nbsp;
            <div className='pateints pat3'>D</div>
        </div>
        <p>David</p>
        <p>"Managing appointments as a patient was a smooth experience on this platform. The layout was intuitive, and the reminders kept me on track!"</p>
    </Card>

    <Card className='p-3 cards'>
        <div className='d-flex'>
            -------------------- &nbsp;
            <div className='pateints pat4'>J</div>
        </div>
        <p>John Abraham</p>
        <p>"This platform was a game-changer for scheduling appointments as a patient. The modern interface and flexible options made it convenient</p>
    </Card>
</Col>
    </Row>
  </Container>



    </Container>
  )
}

export default Homepage