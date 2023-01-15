import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Sscard = ({el ,champ}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>Name :{el.nom}</Card.Title>
        <Card.Text>Age : {el.age}</Card.Text>
        <Card.Text>Score : {el.score}</Card.Text>
        <Button onClick={()=>champ(el.nom, el.age)}variant="primary">View more</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Sscard