import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './DoctorList.css'

function DocList() {
    const base_url = 'https://doctorapp-backend-glru.onrender.com/doctors'
    const [docList,setDocList] = useState([])
    const fetchData = async()=>{
        const result = await axios.get(base_url)
        setDocList(result.data)
    }
    console.log(docList)

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    <Container className=' '>
     
     <h1 className='text-center' ><span style={{color:"rgb(0, 114, 207)"}}>|</span>Our Dedicated Doctors</h1>


        
        <Row className='my-4'>
        {
            docList.map(item=>(
                <Col className=' d-flex gap-3 ' lg={3}>
                <Link to={`view/${item.id}`}>
                <Card  className='my-4 card'>
      <Card.Body>
        <Card.Title className='fw-bold'>{item.name}</Card.Title>

        <div className='d-flex align-items-center  gap-2'>
        <Card.Text style={{fontSize:"13px"}}>{item.specialty}</Card.Text>
        <p style={{fontSize:"13px"}}>
        {item.rating}⭐
        </p>
        </div>
        <Card.Text>{item.hospital}</Card.Text>
        <Card.Text><i className="fa-solid fa-phone" ></i> {item.phone}</Card.Text>

      </Card.Body>
    </Card>
        </Link>
                </Col>
            ))
        }
        </Row>

</Container>
    </>
  )
}

export default DocList