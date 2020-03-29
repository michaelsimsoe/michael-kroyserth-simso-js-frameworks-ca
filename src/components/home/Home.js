import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import { fetchAllGames } from '../../actions';
import { GameCard } from './GameCard'

const jumbotronStyles = {
  backgroundColor: 'rgb(172,117,158)',
  background: 'linear-gradient(162deg, rgba(172,117,158,1) 19%, rgba(219,10,91,1) 78%)',
  color: '#fff'
}
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
    <>
    <Jumbotron fluid style={jumbotronStyles}>
      <Container>
        <h1>Check out these games!</h1>
        <p>
          They are so cool and so fly!
        </p>
      </Container>
    </Jumbotron>
    <Row>
      <Col style={homeLayout}>
        {state.games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </Col>
    </Row>
    </>
  )
}