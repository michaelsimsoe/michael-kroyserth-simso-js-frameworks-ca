import React from 'react'
import { useDispatch} from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToFavourites } from '../../actions';

const cardStyle = {
  width: '18rem',
  margin: 10
}
export const GameCard = (props) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={props.game.background_image} />
        <Card.Body>
          <Card.Title>{props.game.name}</Card.Title>
          <Card.Text>
            Rating: {props.game.rating}
          </Card.Text>
          <Card.Text>
            Released: {props.game.released}
          </Card.Text>
          <LinkContainer to={`/game_details/${props.game.id}`}>
            <Button variant="primary">See game</Button>
          </LinkContainer>
          <Button onClick={() => dispatch(addToFavourites(props.game))}>Add to Favourites</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
