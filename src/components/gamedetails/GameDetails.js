import { GameDetailList } from './GameDetailList';
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { useLocation, Redirect } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { fetchOneGame, addToFavourites, removeFromFavourites } from '../../actions';

export const GameDetails = (props) => {
  const { game, favourites } = useSelector(state => state)
  const location = useLocation();
  const gameId = location.pathname.match(/\d+/g)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchOneGame(gameId))
  }, [dispatch]);

  if (game === "") {
    return <Redirect to="/" />;
  }

  const gameIsFavourited = favourites.findIndex(fav => fav.id === game.id)

  const handleClick = () => {
    if (gameIsFavourited < 0) {
      return dispatch(addToFavourites(game));
    }
    return dispatch(removeFromFavourites(game));
  }
  return (
      <Row>
        <Col sm={6}>
          <Image src={game.background_image} fluid />
        </Col>
        <Col sm={6}>
          <Row>
            <Col>
              <h1>{game.name}</h1>
              <a href={game.website}>Game website</a>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h4>Genres:</h4>
              {game.genres && <GameDetailList listItem={game.genres}/>}
            </Col>
            <Col>
              <h4>Available on:</h4>
              {game.platforms && <GameDetailList listItem={game.platforms}/>}
            </Col>
            <Col xs={12} sm={6}>
              <p>{game.description && game.description.replace(/(<([^>]+)>)/ig, "")}</p>
              <Button onClick={handleClick}>
                { gameIsFavourited < 0 ? 'Add to Favourites' : 'Favourited' }
              </Button>
            </Col>
          </Row>
        </Col>      
      </Row>
  )
}
  