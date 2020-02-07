import React, { Component } from 'react';
import { Header, List, Segment } from 'semantic-ui-react'

export default class GamesList extends Component {
  render() {
    return(
      <Segment inverted>
        <Header as='h4' content='Any% Records' attached='top' />

        <List divided relaxed animated size='massive' style={{ marginTop: '0.5em' }}>
          {
            games.map(({ name, time }, i) => (
              <List.Item key={i}>
                <List.Header as='a' content={ name } />
                <List.Content style={{ marginLeft: 14, fontSize: 14 }}>{ time }</List.Content>
              </List.Item>
            ))
          }
        </List>
      </Segment>
    );
  }
}

const games = [
  { id: 1, name: 'Fable', link: 'og', time: '1h 22m 46s' },
  { id: 2, name: 'Fable: The Lost Chapters', link: 'tlc', time: '1h 05m 29s' },
  { id: 3, name: 'Fable 2', link: 'f2', time: '2h 54m 09s' },
  { id: 4, name: 'Fable 3', link: 'f3', time: '3h 19m 02s' },
  { id: 5, name: 'Fable Anniversary', link: 'anniversary', time: '1h 04m 36s' },
]