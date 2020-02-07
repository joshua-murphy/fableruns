import React from 'react';
import games from './games';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    const { currentGame, handleGameChange } = this.props;

    return (
      <Menu inverted widths={4} style={{ position: 'fixed', top: 0, zIndex: 10 }}>
        <Menu.Item as={Link} to="/" content='Home' onClick={handleGameChange} name='0' />
        <Dropdown item text='Games' id='nav-games'>
          <Dropdown.Menu>
            {
              games.map(({ id, name, link }) => (
                <Dropdown.Item key={id} as={Link} to={`/game/${link}`} active={ currentGame.id === id } name={id} content={name} onClick={handleGameChange} />
              ))  
            }
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='a' href='https://speedrun.com/fable' target='_blank' rel="noopener noreferrer">
          <Icon name='external' />
          Fable SRC
        </Menu.Item>
        <Menu.Item as='a' href='https://discord.gg/Sv8P6Ef' target='_blank' rel="noopener noreferrer">
          <Icon name='external' />
          Fable Discord
        </Menu.Item>
      </Menu>
    );
  }
}