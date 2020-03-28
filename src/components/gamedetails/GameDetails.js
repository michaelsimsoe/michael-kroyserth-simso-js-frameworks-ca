import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { useLocation } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { fetchOneGame, addToFavourites } from '../../actions';

export const GameDetails = (props) => {
  const { game } = useSelector(state => state)
  const location = useLocation();
  const gameId = location.pathname.match(/\d+/g)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchOneGame(gameId))
  }, [dispatch]);

  return (
      <Row>
        <Col>
          <Image src={game.background_image} fluid />
          <h1>{game.name}</h1>
          <a href={game.website}>Game website</a>
          <p>{game.description && game.description.replace(/(<([^>]+)>)/ig, "")}</p>
          <Button onClick={() => dispatch(addToFavourites(game))}>Add to Favourites</Button>
        </Col>      
      </Row>
  )
}
