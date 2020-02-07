import React, { Component } from 'react';
import Sidebar from './Sidebar';
import games from './games';
import { Grid, Header, Segment } from 'semantic-ui-react';

export default class Game extends Component {
  state = { currentGame: {} }

  componentDidUpdate() {
    const currentGame = games.find(g => g.link === this.props.match.params.link);

    currentGame !== this.state.currentGame && this.setState({ currentGame });
  }

  render() {
    const game = this.state.currentGame;

    return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width='3'>
            <Sidebar />
          </Grid.Column>

          <Grid.Column width='9'>
            <Segment.Group>
              <Header content={game.name} />
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}