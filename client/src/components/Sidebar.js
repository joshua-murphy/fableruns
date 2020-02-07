import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

export default class Sidebar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return(
      <Segment inverted raised>
        <Menu vertical pointing secondary inverted fluid size='massive' id='game-sidebar'>
          {
            resourceGroups.map(({ name, items }, i) => (
              <Menu.Item key={i}>
                <Menu.Header>{ name }</Menu.Header>

                <Menu.Menu>
                  {
                    items.map(({ name }, i2) => {
                      const key = `${i}-${i2}`;

                      return (
                        <Menu.Item key={key} name={key} active={activeItem === key} onClick={ this.handleItemClick }>
                          { name }
                        </Menu.Item>
                      )
                    })
                  }
                </Menu.Menu>
              </Menu.Item>
            ))
          }
        </Menu>
      </Segment>
    );
  }
}

const resourceGroups = [
  { 
    name: 'Resources', 
    items: [
      { name: 'Tutorials' },
      { name: 'Routes' },
      { name: 'Meta' },
    ]
  }, { 
    name: 'Information', 
    items: [
      { name: 'Glitches' },
      { name: 'Quests' },
      { name: 'Areas' },
    ]
  }
]