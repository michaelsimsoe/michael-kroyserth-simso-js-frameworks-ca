import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const GameCard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.game.background_image} />
        <Card.Body>
          <Card.Title>{props.game.name}</Card.Title>
          <Card.Text>
            Rating: {props.game.rating}
          </Card.Text>
          <Card.Text>
            Released: {props.game.released}
          </Card.Text>
          <Button variant="primary">See game</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
