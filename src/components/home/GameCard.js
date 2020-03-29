import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToFavourites, removeFromFavourites } from '../../actions';

const cardStyle = {
  width: '18rem',
  margin: 10,
  minHeight: 430,
  display: 'flex',
  flexDirection: 'column',
  
}

const cardBody = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}

export const GameCard = (props) => {
  const { favourites } = useSelector(state => state)
  const dispatch = useDispatch()

  const gameIsFavourited = favourites.findIndex(fav => fav.id === props.game.id)
  const handleClick = () => {
    if (gameIsFavourited < 0) {
      return dispatch(addToFavourites(props.game));
    }
    return dispatch(removeFromFavourites(props.game));
  }
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={props.game.background_image} />
        <Card.Body style={cardBody}>
          <Card.Title>{props.game.name}</Card.Title>
          <Card.Text>
            Rating: {props.game.rating}
          </Card.Text>
          <Card.Text>
            Released: {props.game.released}
          </Card.Text>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <LinkContainer to={`/game/${props.game.id}`}>
              <Button variant="primary">See game</Button>
            </LinkContainer>
            <Button variant="outline-secondary" onClick={handleClick}>
              { gameIsFavourited < 0 ? 'Add to Favourites' : 'Favourited' }
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
