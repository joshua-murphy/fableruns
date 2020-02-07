import React, { Component } from 'react';
import GamesList from './GamesList';
import { Segment, Grid } from 'semantic-ui-react';
import Announcements from './Announcements';

export default class Home extends Component {
  render() {

  return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width='3'>
            <GamesList />
          </Grid.Column>

          <Grid.Column width='9'>
            <Segment.Group>
              <Announcements />
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}