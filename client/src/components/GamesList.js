import React, { Component } from 'react';
import games from './games';
import { Header, List, Segment } from 'semantic-ui-react';

export default class GamesList extends Component {
  render() {
    return(
      <Segment inverted>
        <Header as='h4' content='Any% Records' attached='top' />

        <List divided relaxed size='massive' style={{ marginTop: '0.5em' }}>
          {
            games.map(({ name, time }, i) => (
              <List.Item key={i}>
                <List.Header content={ name } className='highlight' />
                <List.Content style={{ marginLeft: 14, fontSize: 14 }}>{time}</List.Content>
              </List.Item>
            ))
          }
        </List>
      </Segment>
    );
  }
}