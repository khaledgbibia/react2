import React from 'react'
import Card from 'react-bootstrap/Card';

export const Carte = ({phoneName,phoneDescription,phonePrice,phoneImage}) => {
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={phoneImage} />
      <Card.Body>
       {phoneName}
        <Card.Text>
          {phoneDescription}
          <br/>
          {phonePrice}
        </Card.Text>
        
      </Card.Body>
      
    </Card>
    
    

    </div>

  )
 
  
    
    
  }

