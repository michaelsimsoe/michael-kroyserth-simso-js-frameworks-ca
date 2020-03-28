import React, { useEffect }from 'react';
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
  // const [games, setGames ] = useState([]);
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllGames())
  }, [dispatch]);
  
  console.log(state)
  return (
    <Row>
      <Col style={homeLayout}>
        {/* {state.games && state.games.length} */}
        {state.games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </Col>
    </Row>
  )
}