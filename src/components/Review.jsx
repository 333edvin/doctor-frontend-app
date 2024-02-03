import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function Review({rw}) {

  return (
    <div>
      <div className='mt-4'>
        <h2>Reviews</h2>
      <div style={{display:'flex',flexDirection:'column'}}>
          <Row className='d-flex gap-3 px-3'>
        {
          rw?.map(item=>(

                  
                <Card className='d-flex  flex-column p-3'>
           <div className='d-flex'>
            <p>{item.patient_name}</p>&nbsp; &nbsp;
            <p>({item.rating}</p>⭐)
            </div>
            <p style={{fontSize:'13px'}}>{item.date}</p>
              <p style={{fontSize:'14px'}} className='text-align-justify'>{item.comments}</p>
                </Card>
       
           
           ))
        }
        </Row>
        </div>
        </div>

      
        
       
    </div>
  )
}

export default Review