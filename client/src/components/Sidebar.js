import React, { Component } from 'react';
import { Divider, Header, Menu, Segment } from 'semantic-ui-react'

export default class Sidebar extends Component {
  render() {
    const { activeItem, resourceGroups } = this.props;

    return(
      <Segment inverted raised>
        <Menu vertical pointing secondary inverted fluid id='game-sidebar'>
          {
            (resourceGroups.length ?
              resourceGroups.map(({ name, items }, i) => (
                <div key={i}>
                  { i !== 0 && <Divider /> }
                  <Menu.Header as={Header} style={{ textAlign: 'center' }} block>{name}</Menu.Header>

                  {
                    (items.length ?
                        items.map(({ name }, i2) => {
                        const key = `${i}-${i2}`;

                        return <Menu.Item key={key} name={key} active={activeItem === key} onClick={this.props.handleItemClick} content={name} />;
                      })
                    :
                      <p>No items available</p>
                    )
                  }
                </div>
              ))
            :
              <p>No game info available</p>
            )
          }
        </Menu>
      </Segment>
    );
  }
}