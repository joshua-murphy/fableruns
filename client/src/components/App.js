import React, { Component } from 'react';
import Home from './Home';
import NavBar from './Navbar';
import NoMatch from './NoMatch';
import Game from './Game'
import games from './games';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = { currentGame: {} }

  handleGameChange = (e, { name }) => {
    this.setState({ currentGame: games.find(g => g.id === name) || {} });
  }

  render() {
    const { state: { currentGame }, handleGameChange } = this;

    return(
      <div style={{ paddingTop: 41 }}>
        <NavBar currentGame={currentGame} handleGameChange={handleGameChange}  />
        <Switch>
          <Route exact path='/' component={Home} agames={games} />
          <Route exact path='/game/:link' component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

// const games = [
//   { id: 1, name: 'Fable', link: 'og', time: '1h 22m 46s' },
//   { id: 2, name: 'Fable: The Lost Chapters', link: 'tlc', time: '1h 05m 29s' },
//   { id: 3, name: 'Fable 2', link: 'f2', time: '2h 54m 09s' },
//   { id: 4, name: 'Fable 3', link: 'f3', time: '3h 19m 02s' },
//   { id: 5, name: 'Fable Anniversary', link: 'anniversary', time: '1h 04m 36s' },
// ]