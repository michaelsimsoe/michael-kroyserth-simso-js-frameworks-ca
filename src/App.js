import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from "react-bootstrap/Container";

import { Home } from './components/home/Home';
import { Favourites } from './components/favourites/Favourites';
import { Contact } from './components/contact/Contact';
import { GameDetails } from './components/gamedetails/GameDetails';
import { Header } from './components/shared/Header';

function App() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/game_details">
            <GameDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
