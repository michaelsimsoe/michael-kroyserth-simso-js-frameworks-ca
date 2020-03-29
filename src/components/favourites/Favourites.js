import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { removeFromFavourites } from '../../actions';

const listItemStyles = {
  display: 'flex',
  justifyContent: 'space-between'
}
export const Favourites = (props) => {
  const { favourites } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col>
        <h2>Favourited Games</h2>
        <ListGroup>
          {favourites.map(fav => {
            return (
              <ListGroup.Item key={fav.id} style={listItemStyles}>
                <Link to={`/game/${fav.id}`}>{fav.name}</Link>
                <Button onClick={() => dispatch(removeFromFavourites(fav))}>Remove</Button>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Col>
    </Row>

  )
}
