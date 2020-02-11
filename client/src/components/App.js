import React, { Component } from 'react';
import Home from './Home';
import NavBar from './Navbar';
import NoMatch from './NoMatch';
import Game from './Game';
import games from './games';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = { currentGame: {} }

  handleGameChange = (e, { name }) => {
    this.setState({ currentGame: games.find(g => g.id === name) || {} }, () => {});
  }

  render() {
    const { state: { currentGame }, handleGameChange } = this;

    return(
      <div style={{ paddingTop: 41 }}>
        <NavBar currentGame={currentGame} handleGameChange={handleGameChange}  />
        <Switch>
          <Route exact path='/' component={Home} games={games} />
          <Route exact path='/game/:link' component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}