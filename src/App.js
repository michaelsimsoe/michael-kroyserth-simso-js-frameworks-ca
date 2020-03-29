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

const containerStyles = {
  marginTop: 60
}
const footerStyles = {
  width: '100%',
  textAlign: 'center',
  padding: '5em'
}
function App() {
  return (
    <Router>
      <Header />
      <Container fluid style={containerStyles}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/game">
            <GameDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
      <footer style={footerStyles}><em>This site is using data from <a href="https://api.rawg.io/docs/">RAWG Video Games Database API</a></em></footer>
    </Router>
  )
}

export default App;
