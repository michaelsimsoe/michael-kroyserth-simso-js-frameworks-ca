import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchAllGames } from '../../actions';
import { GameCard } from './GameCard'

const homeLayout = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const Home = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllGames())
  }, [dispatch]);
  
  return (
    <Row>
      <Col style={homeLayout}>
        {state.games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </Col>
    </Row>
  )
}